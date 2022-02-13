<script setup>
const handleClick = (e) => {
  console.log("icon 点击事件：", e);
};
</script>

<template>
  <div class="block-box">
    <span>基础 Icon </span>
    <u-icon name="refresh" @click="handleClick"></u-icon>
    <u-icon name="close" @click="handleClick"></u-icon>
    <hr>
    <span>hover 变色 </span>
    <u-icon name="plus" @click="handleClick" class="icon-plus"></u-icon>
  </div>
</template>

<style scoped>
.icon-plus:hover {
    fill: red;
}
</style>
