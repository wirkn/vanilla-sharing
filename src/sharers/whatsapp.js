import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';
import updateWindowParams from '../utils/updateWindowParams';

export function getWhatsappUrl(options = {}) {
  const { phone, title, url } = options;

  const params = encodeParams({
    text: [title, url].filter((item) => item).join(' '),
    phone,
  });

  return `https://api.whatsapp.com/send?${params}`;
}

export function whatsapp(options = {}) {
  return window.open(getWhatsappUrl(options), '_blank', updateWindowParams(WIN_PARAMS, options));
}
