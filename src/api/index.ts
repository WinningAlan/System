/*
 * @Author: your name
 * @Date: 2021-04-06 18:16:11
 * @LastEditTime: 2021-04-06 18:16:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\api\index.ts
 */
const files = import.meta.globEager("./*.ts");
let allApi: any = {};

