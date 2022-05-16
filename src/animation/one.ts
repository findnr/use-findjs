/*
 * @Author: 程英明
 * @Date: 2022-05-14 08:12:23
 * @LastEditTime: 2022-05-16 09:03:22
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\src\animation\one.ts
 * QQ:504875043@qq.com
 */
export interface ConfigTemplate {
    el: Object | String,//元素对象或元素id名,class名
    direction: String,//方向t,l,r,b
    time: Number,//时间ms
    style: Object,//样式对象
}
class One extends Common {
    private _config: ConfigTemplate;
    constructor(obj: any) {
        super();
        this._config = {
            el: '',
            direction: 't',
            time: 2000,
            style: {}
        }
        Object.assign(this._config, obj);
        switch (this._config.direction) {
            case 't':
                this.t();
                break;
            case 'r':
                this.r();
                break;
            case 'l':
                this.l();
                break;
            case 'b':
                this.b();
                break;
            default:
                this.error();
                break;
        }

    }
    t(): Error | Boolean {
        return true;
    }
    r(): Error | Boolean {
        return true;
    }
    l(): Error | Boolean {
        return true;
    }
    b(): Error | Boolean {
        return true;
    }
    error(): Error {
        return Error(`没有此运动模式`);
    }
}
export default One;