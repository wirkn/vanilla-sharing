import { WIN_PARAMS } from '../config';
import updateWindowParams from '../utils/updateWindowParams';

export default function line(options = {}) {
  const { title, url } = options;

  if (!url) {
    throw new Error('url is not defined');
  }

  let params = encodeURIComponent(`${url}`);

  if (title) {
    params = `${encodeURIComponent(`${title} `)}${params}`;
  }

  return window.open(`https://line.me/R/msg/text/?${params}`, '_blank', updateWindowParams(WIN_PARAMS, options));
}
