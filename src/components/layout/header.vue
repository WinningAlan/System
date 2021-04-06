<!--
 * @Author: your name
 * @Date: 2021-04-02 09:16:20
 * @LastEditTime: 2021-04-02 18:17:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\components\layout\header.vue
-->
<template>
  <div class="header">
    <div class="iscolse">
      <span @click="changeCollapse">
        <i class="el-icon-s-fold" v-if="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-else></i>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
// import {getStroe,setStroe} from '../../hook/useStroe'
import { useStore } from "vuex";
export default defineComponent({
  name: "header",
  setup() {
    const stroe = useStore();
    console.log(stroe)
    const isCollapse = computed(() => stroe.getters["public/GET_ISCOLLAPSE"]);
    const changeCollapse = () => {
        console.log(isCollapse)
      stroe.commit("public/SET_ISCOLLAPSE",!isCollapse.value);
    };
    return {
      isCollapse,
      changeCollapse,
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  background: #0071e7;
  height: 60px;
  line-height: 60px;
  .iscolse {
    font-size: 20px;
    color: #fff;
    padding-left: 10px;
    cursor: pointer;
  }
}
</style>