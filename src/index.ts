/*
 * @Author: 程英明
 * @Date: 2022-05-08 14:52:23
 * @LastEditTime: 2022-05-12 20:40:17
 * @LastEditors: 程英明
 * @Description:
 * @FilePath: \use-findjs\src\index.ts
 * QQ:504875043@qq.com
 */
import local from "./local/index"
export const useClocal = () => {
    return local;
}

import animation from "./animation/index"
export const useCanimation = () => {
    return animation;
}

import array from "./array/index"
export const useCarray = () => {
    return array;
}

import detector from "./detector/index"
export const useCdetector = () => {
    return detector;
}

import download from "./download/index"
export const useCdownload = () => {
    return download;
}

import number from "./number/index"
export const useCnumber = () => {
    return number;
}

import object from "./object/index";
export const useCobject = () => {
    return object;
}

import session from "./session/index"
export const useCsession = () => {
    return session;
}

import string from "./string/index";
export const useCstring = () => {
    return string;
}

import time from "./time/index"
export const useCtime = () => {
    return time;
}