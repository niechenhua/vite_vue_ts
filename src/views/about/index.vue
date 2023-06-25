<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="card">
    <el-button type="primary">Primary1</el-button>
  </div>
</template>

<style lang="scss" scoped>
.count {
  color: $main_color;
}
</style>