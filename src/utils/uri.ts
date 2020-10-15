export const getCallBackCodeUtil = (uri: string) => {
  if (uri.indexOf('?code=') > 0) {
    let pos = uri.indexOf('?code=');
    let pos2 = uri.indexOf('#_');
    return uri.slice(pos + 6, pos2);
  }
  return '';
};
