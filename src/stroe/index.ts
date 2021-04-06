/*
 * @Author: your name
 * @Date: 2021-04-02 10:22:39
 * @LastEditTime: 2021-04-02 11:00:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\stroe\index.ts
 */
import {createStore} from 'vuex';
import modules from "./module";
console.log(modules)
export default createStore({
    modules:modules
})