import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export function getFbShareUrl(options = {}) {
  const {
    fbAppId, url, hashtag, redirectUri,
  } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  const params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    href: url,
    hashtag,
  });

  return `https://www.facebook.com/dialog/share?${params}`;
}

export function fbShare(options = {}) {
  return window.open(getFbShareUrl(options), '_blank', updateWindowParams(WIN_PARAMS, options));
}
