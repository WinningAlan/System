/*
 * @Author: your name
 * @Date: 2021-04-01 15:21:14
 * @LastEditTime: 2021-04-02 18:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\router\index.tsx
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "../layout/index.vue"
import {getSession} from '../utils/session'
import stroe from "../stroe"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        name: "login",
        path: "/login",
        component: () => import("../views/Login.vue")
    },
    {
        name: "index",
        path: "/index",
        component: layout,
        children: [
            {
                name: "home",
                path: "/index/home",
                component: () => import('../views/home/index.vue')
            }
        ],
        redirect: "/index/home"
    },
    {
        name: "jurisdiction",
        path: "/jurisdiction",
        redirect: "/jurisdiction/user",
        component: layout,
        children: [
            {
                name: "user",
                path: "/jurisdiction/user",
                component: () => import('../views/jurisdiction/user.vue')
            },
            {
                name: "level",
                path: "/jurisdiction/level",
                component: () => import('../views/jurisdiction/level.vue')
            },
            {
                name: "organization",
                path: "/jurisdiction/organization",
                component: () => import('../views/jurisdiction/organization.vue')
            },
            {
                name: "role",
                path: "/jurisdiction/role",
                component: () => import('../views/jurisdiction/role.vue')
            },
            {
                name: "routing",
                path: "/jurisdiction/routing",
                component: () => import('../views/jurisdiction/routing.vue')
            },
            {
                name: "position",
                path: "/jurisdiction/position",
                component: () => import('../views/jurisdiction/position.vue')
            }
        ],
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    let isLogin = getSession("user")
    if (to.path == '/login') {
        next();
    } else {
        if(isLogin){
            stroe.commit("public/SET_USER",isLogin)
            next();

        }else{
            next('/login')
        }
        // 是否在登录状态下
    }
})
export default router;