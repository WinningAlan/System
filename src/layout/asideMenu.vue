<!--
 * @Author: your name
 * @Date: 2021-04-01 15:13:17
 * @LastEditTime: 2021-04-02 18:24:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\layout\asideMenu.vue
-->
<template>
  <el-menu
    :default-active="path"
    :collapse="isCollapse"
    mode="vertical"
    :collapse-transition="true"
    active-text-color="#0071e7"
  >
    <aside-item v-for="item in list" :item="item" :key="item.Name" />
  </el-menu>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import asideItem from "./asideItem.vue";
import navlist from "./a";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  components: {
    asideItem,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const list = ref(navlist);
    const store = useStore();
    // const selectRouter = (val: string) => {
    //   router.push(val)
    //   console.log(val,router,route.fullPath);

    // };
    const path = computed(() => route.fullPath);
    const isCollapse = computed(() => store.getters["public/GET_ISCOLLAPSE"]);
    return {
      list,
      path,
      // selectRouter,
      isCollapse,
    };
  },
});
</script>
<style lang="less" scoped>
.el-menu {
  height: calc(100vh - 62px);
  overflow-y: auto;
  overflow-x: hidden;
  border: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>