/*
 * @Author: your name
 * @Date: 2021-04-01 13:50:30
 * @LastEditTime: 2021-04-13 16:52:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\App.tsx
 */
import {defineComponent} from 'vue';
import { RouterView } from 'vue-router';
import "./app.less"
export default defineComponent({
    name:"App",
    setup(){
        return ()=>{
            return (
                <>
                <div class="app">
                    <RouterView/>
                </div>
                <div id="diaLog"></div>
                </>
            )
        }
    }
})