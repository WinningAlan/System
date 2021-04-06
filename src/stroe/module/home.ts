/*
 * @Author: your name
 * @Date: 2021-04-02 11:22:13
 * @LastEditTime: 2021-04-02 11:26:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\stroe\module\home.ts
 */
interface initStateType {
    isCollapse: boolean
}
const state: initStateType = {
    isCollapse: false, //控制菜单收起和展示的参数
}
const getters = {
    GET_ISCOLLAPSE({ isCollapse }: any) {
        return isCollapse
    },
}
const mutations = {
    SET_ISCOLLAPSE(state: initStateType, data: boolean) {
        state.isCollapse = data;
    }
}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}