<!--
 * @Author: your name
 * @Date: 2021-04-01 15:04:58
 * @LastEditTime: 2021-04-06 15:12:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\views\home\index.vue
-->
<template>
    <div class="home">
       <div class="header"> 
       </div>
       <el-tooltip content="新增" placement="top" >
           <svg-icon iconClass="add" class="styleIcon"></svg-icon>
       </el-tooltip>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style lang="less" scoped>
 .styleIcon{
     color: red;
     width: 20px;
     height: 20px;
     cursor: pointer;
 }
</style>
