export default function updateWindowParams(WIN_PARAMS, options) {
  const {
    left, top, width, height,
  } = options;

  let NEW_WIN_PARAMS = WIN_PARAMS;
  if (left) {
    NEW_WIN_PARAMS = NEW_WIN_PARAMS.replace('left=100', `left=${left}`);
  }
  if (top) {
    NEW_WIN_PARAMS = NEW_WIN_PARAMS.replace('top=100', `top=${top}`);
  }
  if (width) {
    NEW_WIN_PARAMS = NEW_WIN_PARAMS.replace('width=550', `width=${width}`);
  }
  if (height) {
    NEW_WIN_PARAMS = NEW_WIN_PARAMS.replace('height=440', `height=${height}`);
  }
  return NEW_WIN_PARAMS;
}
