<!--
 * @Author: your name
 * @Date: 2021-04-01 15:14:37
 * @LastEditTime: 2021-04-02 18:15:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\layout\index.vue
-->
<template>
  <el-container>
    <el-aside class="aside" :class="{ isCollapse: isCollapse }">
      <div class="menu_header">
        <img src="../assets//logo.png" class="menu_img" />
        <p :class="{ showTitle: isCollapse }">急诊管理系统</p>
      </div>
      <asideMenu />
    </el-aside>
    <el-container>
      <el-header class="header">
        <pageHeader />
      </el-header>
      <el-main class="main">
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { defineComponent, computed } from "vue";
import appMain from "./appMain.vue";
import asideMenu from "./asideMenu.vue";
import pageHeader from "../components/layout/header.vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    asideMenu,
    pageHeader,
    appMain,
  },
  setup() {
    const stroe = useStore();
    const isCollapse = computed(() => stroe.getters["public/GET_ISCOLLAPSE"]);
    return {
      isCollapse,
    };
  },
});
</script>
<style lang="less" scoped>
.el-main {
  padding: 0;
  background: #eee;
  overflow: hidden;
}
.el-aside {
  padding: 0;
  border: 1px solid #ccc;
  overflow: hidden;
}
.aside {
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  width: 200px !important;
}
.isCollapse {
  width: 60px !important;
}
.el-header {
  padding: 0;
}
.menu_header {
  height: 60px;
  display: flex;
  justify-content: center;
  line-height: 60px;
  img {
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    // flex: 1;
    // padding-left: 10px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .showTitle {
    // display: none;
    width: 0;
  }
}
</style>
