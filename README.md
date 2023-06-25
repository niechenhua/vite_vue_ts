# Vue 3 + TypeScript + Vite
1、vite创建vue3项目
   npm create vite@latest 或者 yarn create vite
2、安装less/sass依赖
   npm add -D less   或者 npm add -D sass 本项目运用sass
3、自动导入，使用之后,不用导入vue中hook reactive ref
   npm install -D unplugin-vue-components unplugin-auto-import
4、安装路由
   npm install vue-router@4 
5、安装pinia，因为是vue3+ts，安装pinia更好点，vuex拥抱ts没有pinia好
   npm install pinia 
6、配置@别名
   alias: {"@": resolve(__dirname, "./src")}
7、添加Element Plus组件库
   npm install element-plus --save
8、安装并封装axios
   npm install axios
   
ts兼容问题
1、ts兼容.vue后缀文件
   tsconfig.jsopn-include添加"types/**/*.d.ts"

配置问题
1、打包以及服务站点信息配置在vite.config.ts配置

