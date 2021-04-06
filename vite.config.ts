/*
 * @Author: your name
 * @Date: 2021-04-01 13:50:30
 * @LastEditTime: 2021-04-06 14:35:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' //使用vue3的
import vitePluginImp from "vite-plugin-imp"
import vueJsxPlugin from "@vitejs/plugin-vue-jsx"
import { svgBuilder } from './src/plugins/svgBuilder'; 
import { resolve } from "path" //路径设置
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
      "comp": resolve(__dirname, "src/components"),
      "api": resolve(__dirname, "src/api"),
      "utils": resolve(__dirname, "src/utils")
    }
  },
  esbuild: {
    jsxInject: `import {h} from 'vue'`,
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [vue(), vueJsxPlugin(), vitePluginImp({
    libList: [
      {
        libName: "element-plus",
        style: (name) => `element-plus/lib/theme-chalk/${name}.css`
      }
    ],
  }),svgBuilder("./src/icons/svg/")]
})
