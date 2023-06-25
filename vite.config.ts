import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置@别名
import path from "path"; 
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
      "@": path.resolve(__dirname, "src"),
      '@api': path.resolve(__dirname, 'src/request/api'),
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
    cors: true,//允许跨域
    // 代理
    // proxy: {
    //   '/api': { // 匹配请求路径，
    //       target: '你要代理的地址', // 代理的目标地址
    //        // 开发模式，默认的127.0.0.1,开启后代理服务会把origin修改为目标地址
    //       changeOrigin: true,
    //       // secure: true, // 是否https接口
    //       // ws: true, // 是否代理websockets

    //       // 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启；没有就开启
    //       //简单来说，就是是否改路径 加某些东西
    //       rewrite: (path) => path.replace(/^\/api/, '') 
    //   }
    // }
  }
})
