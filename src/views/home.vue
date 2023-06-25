<script setup lang="ts">
defineProps<{ msg: string }>()
const count = ref(0)
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
