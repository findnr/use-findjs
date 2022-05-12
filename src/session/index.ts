/*
 * @Author: 程英明
 * @Date: 2022-05-08 15:25:36
 * @LastEditTime: 2022-05-12 20:42:35
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\src\session\index.ts
 * QQ:504875043@qq.com
 */
//设置数据

const set = (data: { [propName: string]: any }) => {
    for (const key in data) {
        sessionStorage.setItem(key, data[key])
    }
}
//获取数据
const get = (name: string): null | string => {
    return sessionStorage.getItem(name)
}
//清楚所有数据
const clear = () => {
    return sessionStorage.clear();
}

export default { set, get, clear }