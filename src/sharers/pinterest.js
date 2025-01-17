import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export default function pinterest(options = {}) {
  const { description, url, media } = options;

  const params = encodeParams({ url, description, media });

  return window.open(`https://pinterest.com/pin/create/button/?${params}`, '_blank', updateWindowParams(WIN_PARAMS, options));
}
