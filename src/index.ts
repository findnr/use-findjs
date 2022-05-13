/*
 * @Author: 程英明
 * @Date: 2022-05-08 14:52:23
 * @LastEditTime: 2022-05-13 07:21:01
 * @LastEditors: 程英明
 * @Description:
 * @FilePath: \use-findjs\src\index.ts
 * QQ:504875043@qq.com
 */

import * as local from "./local/index"
console.log(local)
export const useClocal = () => {
    return local.default;
}

import * as animation from "./animation/index"
export const useCanimation = () => {
    return animation.default;
}

import * as array from "./array/index"
export const useCarray = () => {
    return array.default;
}

import * as detector from "./detector/index"
export const useCdetector = () => {
    return detector.default;
}

import * as download from "./download/index"
export const useCdownload = () => {
    return download.default;
}

import * as number from "./number/index"
export const useCnumber = () => {
    return number.default;
}

import * as object from "./object/index";
export const useCobject = () => {
    return object.default;
}

import * as session from "./session/index"
export const useCsession = () => {
    return session.default;
}

import * as string from "./string/index";
export const useCstring = () => {
    return string.default;
}

import * as time from "./time/index"
export const useCtime = () => {
    return time.default;
}