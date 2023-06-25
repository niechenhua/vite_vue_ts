//配置ts兼容识别.vue后缀文件
declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}
declare module "element-plus";