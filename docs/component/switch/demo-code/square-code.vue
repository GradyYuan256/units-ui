<script setup>
import { ref, watch } from "vue";

let switchValue = ref(true);
const handleChange = (e) => {
  console.log("switch 点击事件：", e);
};

watch(() => switchValue.value, (newV, oldV) => {
  console.log('switch watch -->', newV, oldV);
})
</script>
<template>
  <div>
    <u-switch v-model:value="switchValue" @update:value="handleChange" square></u-switch>
    <u-switch v-model:value="switchValue" disabled square></u-switch>
  </div>
</template>