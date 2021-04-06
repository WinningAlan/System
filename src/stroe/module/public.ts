/*
 * @Author: your name
 * @Date: 2021-04-02 10:22:58
 * @LastEditTime: 2021-04-02 18:18:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\stroe\module\public.ts
 */
const namespaced = true;
interface initStateType {
    isCollapse: boolean,
    user:any,
}
const state: initStateType = {
    isCollapse: false, //控制菜单收起和展示的参数
    user:null
}
const getters = {
    GET_ISCOLLAPSE({ isCollapse }: any) {
        return isCollapse
    },
    GET_USER({user}:any){
        return user
    }
}
const mutations = {
    SET_ISCOLLAPSE(state: initStateType, data: boolean) {
        state.isCollapse = data;
    },
    SET_USER(state: initStateType, data: boolean){
        state.user = data;
    }
}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced
}