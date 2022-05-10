/*
 * @Author: 程英明
 * @Date: 2022-05-10 09:54:28
 * @LastEditTime: 2022-05-10 09:58:52
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \use-findjs\rollup.config.js
 * QQ:504875043@qq.com
 */
import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
export default {
    input: "./src/index.ts",
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript")
        }),
        sourceMaps()
    ],
    output: [
        {
            format: "cjs",
            file: "lib/bundle.cjs.js",
            sourcemap: true
        },
        {
            format: "es",
            file: "lib/bundle.esm.js",
            sourcemap: true
        }, {
            file: "lib/ctools.mini.js",
            format: "umd",
            name: "ctools",
        }
    ]
};
