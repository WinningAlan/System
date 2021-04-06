/*
 * @Author: your name
 * @Date: 2021-04-02 10:23:04
 * @LastEditTime: 2021-04-02 10:27:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\stroe\module\index.ts
 */
const files = import.meta.globEager("./*.ts");

const vuexConfig: any = {};

Object.keys(files).forEach((key)=>{
    vuexConfig[key.replace(/\.\/([a-z]*)\.ts/,"$1")] = files[key].default
})

export default vuexConfig;