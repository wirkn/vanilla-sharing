export default function updateWindowParams(WIN_PARAMS, options) {
  const {
    left, top, width, height,
  } = options;
  let NEW_WIN_PARAMS = WIN_PARAMS;
  if (left && left !== 100) {
    NEW_WIN_PARAMS = WIN_PARAMS.replace('left=100', `left=${left}`);
  }
  if (top && top !== 100) {
    NEW_WIN_PARAMS = WIN_PARAMS.replace('top=100', `top=${top}`);
  }
  if (width && width !== 550) {
    NEW_WIN_PARAMS = WIN_PARAMS.replace('width=100', `width=${width}`);
  }
  if (height && height !== 440) {
    NEW_WIN_PARAMS = WIN_PARAMS.replace('height=100', `height=${height}`);
  }
  return NEW_WIN_PARAMS;
}
