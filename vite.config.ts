import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置@别名
import { resolve } from "path"; 
//element-plus 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     // ↓解析配置
    //element-plus 按需导入
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
      resolvers: [ElementPlusResolver(
        {
          // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
          importStyle: "sass",
        }
      )],
    }),
    Components({
      resolvers: [ElementPlusResolver(
        {
          importStyle: "sass",
        }
      )],
    })
  ],
  resolve: {
    // ↓路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      //导入scss全局样式
      scss: {
        additionalData: `@use "./src/styles/public.scss" as *;`,
        // javascriptEnabled: true
      },
    },
  },
  base: './',//打包的路径
  server: {
    port: 4000,//服务端口号
    open: true,//服务启动时自动打开浏览器
    cors: true//允许跨域
 
  }
})
