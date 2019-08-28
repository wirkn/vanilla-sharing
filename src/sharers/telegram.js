import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export function getTelegramUrl(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    url,
    text: title,
  });

  return `https://t.me/share/url?${params}`;
}

export function telegram(options = {}) {
  return window.open(getTelegramUrl(options), '_blank', updateWindowParams(WIN_PARAMS, options));
}
