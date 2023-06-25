<script setup lang="ts">
defineProps<{ msg: string }>()
const count = ref(0)
// import { StatusAPI } from "@api";
// 方法一
// //   //直接使用，一般用在进入页面入请求数据的接口
//   let res = await StatusAPI()
//   console.log( "***" ,res);
// 方法二
// import { loginAPI } from "@api";
// const logout = () => {
//     loginAPI({
//         ...val,
//     }).then((res) => {
//         console.log('***',res );
//         let { list, pageNum, pageSize, total } = res.data
//     })
// };
// 方法三
// import { StatusAPI } from "@api";
// const search = async(val: IUseTableParam) => {
//     let res = await StatusAPI({
//         ...val,
//     })
//     console.log( "***" ,res);
//     let { list, pageNum, pageSize, total } = res.data
//     console.log(list, pageNum, pageSize, total);
// }
// console.log(search);
</script>
<template>
  <div class="card">
    <p>{{ msg }}</p>
    <button type="button" @click="count++" class="count">count is {{ count }}</button>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style lang="scss" scoped>
.count {
  color: $main_color;
}
</style>
