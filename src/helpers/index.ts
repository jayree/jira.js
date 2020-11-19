import { AxiosRequestConfig } from 'axios';
import * as jwt from 'atlassian-jwt';
import * as url from 'url';
import Oauth1a from 'oauth-1.0a';
import * as crypto from 'crypto';
import { Config } from '../config';

export const getAuthentication = (
  config: Config,
  request: AxiosRequestConfig,
): string | undefined => {
  if (config.authentication?.jwt) {
    const { iss, secret, expiryTimeSeconds = 180 } = config.authentication.jwt;

    const pathname = url.parse(request.url || '').pathname || '';
    const nowInSeconds = Math.floor(Date.now() / 1000);

    const jwtToken = jwt.encode(
      {
        iss,
        iat: nowInSeconds,
        exp: nowInSeconds + expiryTimeSeconds,
        qsh: jwt.createQueryStringHash({
          method: request.method || 'get',
          pathname,
          query: request.params || {},
        }),
      },
      secret,
    );

    return `JWT ${jwtToken}`;
  }

  if (config.authentication?.oauth1) {
    const oauth = new Oauth1a({
      consumer: {
        key: config.authentication.oauth1.consumerKey,
        secret: config.authentication.oauth1.consumerSecret,
      },
      signature_method: 'RSA-SHA1',
      hash_function(base_string: string, key: string) {
        return crypto.createSign('RSA-SHA1').update(base_string).sign(decodeURIComponent(key), 'base64');
      },
    });

    const authorization = oauth.authorize(
      { url: config.host + request.url!, method: request.method! },
      {
        key: config.authentication.oauth1.tokenKey,
        secret: config.authentication.oauth1.tokenSecret,
      },
    );

    return oauth.toHeader(authorization).Authorization;
  }

  if (config.authentication?.accessToken) {
    return `Bearer ${config.authentication.accessToken}`;
  }

  if (config.authentication?.basic) {
    const {
      username,
      apiToken,
      password,
    } = config.authentication.basic;

    return `Basic ${Buffer.from(`${username}:${apiToken || password}`).toString('base64')}`;
  }

  return undefined;
};
