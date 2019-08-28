import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export default function linkedin(options = {}) {
  const { title, url, description } = options;

  const params = encodeParams({
    title,
    summary: description,
    url,
  });

  return window.open(`https://www.linkedin.com/shareArticle?mini=true&${params}`, '_blank', updateWindowParams(WIN_PARAMS, options));
}
