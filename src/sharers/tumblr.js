import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export default function tumblr(options = {}) {
  const {
    url, title, caption, tags = [], posttype = 'link',
  } = options;

  const params = encodeParams({
    canonicalUrl: url,
    title,
    caption,
    tags: tags.join(','),
    posttype,
  });

  return window.open(`https://www.tumblr.com/widgets/share/tool?${params}`, '_blank', updateWindowParams(WIN_PARAMS, options));
}
