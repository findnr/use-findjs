/*
 * @Author: 程英明
 * @Date: 2022-05-08 15:25:36
 * @LastEditTime: 2022-05-13 07:20:16
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\src\local\index.ts
 * QQ:504875043@qq.com
 */
//设置数据
export interface localData {
    [propName: string]: any,
}
const set = (data: localData) => {
    for (const key in data) {
        localStorage.setItem(key, data[key])
    }
}
//获取数据
const get = (name: string): null | string => {
    return localStorage.getItem(name)
}
//清楚所有数据
const clear = () => {
    return localStorage.clear();
}

export default { set, get, clear }