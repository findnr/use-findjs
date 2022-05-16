/*
 * @Author: 程英明
 * @Date: 2022-05-08 16:32:06
 * @LastEditTime: 2022-05-16 10:11:10
 * @LastEditors: 程英明
 * @Description: 检测
 * @FilePath: \use-findjs\src\detector\index.ts
 * QQ:504875043@qq.com
 */
const phone = (val: number, callback: Function | Number = 0): boolean | any => {
    if (typeof callback == 'function') return callback(val);
    const reg = /^1[3456789]\d{9}$/;
    const vals: string = String(val)
    return reg.test(vals);
}
const emial = (val: string, callback: Function | Number = 0): boolean | Function => {
    if (typeof callback == 'function') return callback(val);
    return true;
}
const zh = (val: string, start: number = 2, end: number = 5, callback: Function | Number = 0, ttt: number): boolean | Function => {
    if (typeof callback == 'function') return callback(val);
    const regstr: string = "/^[\u4e00-\u9fa5]{" + start + "," + end + "}$/";
    const reg = eval(regstr);
    return reg.test(val);
}
const password = (val: string, callback: Function | Number = 0): boolean | Function => {
    if (typeof callback == 'function') return callback(val);
    const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/;
    return reg.test(val);
}
export default { phone, emial, zh, password }