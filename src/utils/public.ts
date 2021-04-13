/*
 * @Author: your name
 * @Date: 2021-04-01 13:53:08
 * @LastEditTime: 2021-04-13 19:03:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \System\src\utils\public.ts
 */
export const zero = (val: string | number): string => {
    return val > 9 ? val + "" : "0" + val;
}
export const setArr = (arr:Array<any>)=>{
    return arr;
}

