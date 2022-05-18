<!--
 * @Author: 程英明
 * @Date: 2022-05-08 16:20:34
 * @LastEditTime: 2022-05-19 07:27:39
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\README.md
 * QQ:504875043@qq.com
-->
### 这是一个javascript工具库，使用TS来编写
##### localStroge操作
```js
import {useClocal} from "use-findjs"
const local = useClocal();
//obj={token:'fdsafdsakgldsa45f4d6safd',data:'32324324',name:'cym'}
//设置
local.set(obj);
//获取
local.get('name');
//清楚
local.clear();
```
##### sessionStroge操作
```js
import {useCsession} from "use-findjs"
const session = useCsession();
//obj={token:'fdsafdsakgldsa45f4d6safd',data:'32324324',name:'cym'}
//设置
session.set(obj);
//获取
session.get('name');
//清楚
session.clear();
```
### 检测是否合法
```js
import {useCdetector} from "use-findjs"
const detector=useCdetector();
//手机号
detector.phone(13985274012);
detector.email()//邮箱
detector.zh()//检测是否为全中文
detector.password()//检测密码是否为包含三种不同类型字符
```
