/*
 * @Author: your name
 * @Date: 2021-04-01 13:50:30
 * @LastEditTime: 2021-04-06 14:30:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\main.ts
 */
import { createApp } from 'vue'
import App from './App'
import router from "./router"
import msg from "./utils/msg"
import element from "./plugins/element"
import stroe from "./stroe"
import "./assets/styles/index.less"
import svgIcon from "./components/common/svgIcon.vue"
const app = createApp(App);
app.config.globalProperties.$msg = msg
app.component("svg-icon",svgIcon)
app.use(router).use(element).use(stroe).mount('#app');

