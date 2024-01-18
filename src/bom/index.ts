/**
 * window.open()
 * @param url 打开的url
 * @param opt 是否新开tab页
 */
export function openWindow(url: string, opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean }) {
  const { target = '_blank', noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');

  window.open(url, target, feature.join(','));
}
