/*
 * @Author: your name
 * @Date: 2021-04-02 11:01:29
 * @LastEditTime: 2021-04-02 11:05:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\hook\useStroe.ts
 */
import {computed} from 'vue';
import {useStore} from 'vuex';
const store = useStore()
export const getStroe = (path:string)=>{
    return computed(()=>store.getters[path])
}
export const setStroe = (path:string,data:any)=>{
    store.commit(path, data);
    return true;
}