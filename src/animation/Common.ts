/*
 * @Author: 程英明
 * @Date: 2022-05-13 07:16:12
 * @LastEditTime: 2022-05-17 06:55:32
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\src\animation\common.ts
 * QQ:504875043@qq.com
 */

class Common {
    private _animationObj: Object;
    constructor() {
        this._animationObj = window.requestAnimationFrame;
    }
    get ani(): Object {
        return this._animationObj;
    }
    get aniObj(): Object {
        if (!window.requestAnimationFrame) {
            let lastTime = Date.now();//时间戳
            window.requestAnimationFrame = function (callback) {
                let id;
                let nowTime = Date.now();
                var delay = Math.max(16.7 - (nowTime - lastTime), 0);
                //如果上一次的时间 和 本次时间 执行的间隔大于 16.7,那就不再延迟直接执行
                id = setTimeout(callback, delay);
                lastTime = nowTime + delay;//上一次动画执行的时间 
                return id;
            };
        }
        return window.requestAnimationFrame;
    }
}
