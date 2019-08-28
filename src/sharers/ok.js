import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export function getOkUrl(options = {}) {
  const { url, title, image } = options;

  const params = encodeParams({
    url,
    title,
    imageUrl: image,
  });

  return `https://connect.ok.ru/offer?${params}`;
}

export function ok(options = {}) {
  return window.open(getOkUrl(options), '_blank', updateWindowParams(WIN_PARAMS, options));
}
