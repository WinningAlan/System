<!--
 * @Author: your name
 * @Date: 2021-04-01 15:13:49
 * @LastEditTime: 2021-04-02 16:13:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\layout\asideMenuItem.vue
-->
<template>
  <el-submenu :index="item.UiRouter" v-if="item.Children?.length > 0">
    <template #title
      ><i class="el-icon-location icon"></i
      ><span>{{ item.Name }}</span></template
    >
    <aside-item
      v-for="child in item.Children"
      :item="child"
      :key="item.UiRouter"
    />
  </el-submenu>
  <router-link :to="item.UiRouter" v-else :key="item.UiRouter" active-class="routerActiveColor">
    <el-menu-item
      :index="item.UiRouter"
      :class="{ activeColor: item.UiRouter == 'home' }"
    >
      <i class="el-icon-menu icon"></i>
      <template #title
        ><span>{{ item.Name }}</span></template
      >
    </el-menu-item>
  </router-link>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    item: {
      type: Object,
      default:()=>{
        return {}
      }
    },
  },
  setup() {
    // const router = useRouter();
    // console.log(router);
    return {};
  },
});
</script>
<style lang="less" scoped>
.activeColor {
  background: red;
}
</style>

