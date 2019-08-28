import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export default function gp(options = {}) {
  const { url } = options;

  const params = encodeParams({ url });

  return window.open(`https://plus.google.com/share?${params}`, '_blank', updateWindowParams(WIN_PARAMS, options));
}
