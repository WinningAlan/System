<!--
 * @Author: your name
 * @Date: 2021-04-01 15:10:46
 * @LastEditTime: 2021-04-02 15:52:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\layout\appMian.vue
-->
<template>
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view  class="view" />
      <!-- </keep-alive> -->
    </transition>
</template>
