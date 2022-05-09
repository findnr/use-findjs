/*
 * @Author: 程英明
 * @Date: 2022-05-08 15:25:36
 * @LastEditTime: 2022-05-09 22:36:45
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\src\local\index.ts
 * QQ:504875043@qq.com
 */
//设置数据
const set = (data: object) => {
    console.log(data)
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