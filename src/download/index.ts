/*
 * @Author: 程英明
 * @Date: 2022-05-08 16:32:31
 * @LastEditTime: 2022-05-12 21:04:54
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\src\download\index.ts
 * QQ:504875043@qq.com
 */

//获取数据
const get = (href: string | Blob, fileName?: string) => {
    const isBlob = href instanceof Blob
    if (!fileName && typeof href === 'string' && href.startsWith('http')) {
        fileName = href.slice(href.lastIndexOf('/') + 1);
    }
    fileName = decodeURIComponent(fileName || 'download');
    if (typeof href === 'string') href = new Blob([href]);
    if (href instanceof Blob) href = URL.createObjectURL(href);
    const aLink = document.createElement('a');
    aLink.setAttribute('href', href);
    aLink.setAttribute('download', fileName);
    aLink.click();
    if (isBlob) setTimeout(() => URL.revokeObjectURL(aLink.href), 100);

}
export default { get }