import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';


export default function email(options = {}) {
  const {
    url, title, description, subject,
  } = options;
  const params = encodeParams({
    subject,
    body: `${title || ''}\r\n${description || ''}\r\n${url || ''}`,
  });
  return window.open(`mailto:?${params}`, '_blank', updateWindowParams(WIN_PARAMS, options));
}
