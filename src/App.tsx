import {defineComponent} from 'vue';
import { RouterView } from 'vue-router';
import "./app.less"
export default defineComponent({
    name:"App",
    setup(){
        return ()=>{
            return (
                <div class="app">
                    <RouterView/>
                </div>
            )
        }
    }
})