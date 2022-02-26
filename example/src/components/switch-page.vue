<script setup>
import { ref, watch } from "vue";
// import USwitch from "../components/switch/index.vue";

let switchValue = ref(true);
let switchValue1 = ref(true);
const handleChange = (e) => {
  console.log("switch 点击事件：", e);
};
const handleChange1 = (e) => {
  console.log("形状 switch 点击事件：", e);
};

watch(() => switchValue.value, (newV, oldV) => {
  console.log('switch watch -->', newV, oldV);
})
</script>

<template>
  <div class="block-box">
    <span>基础 Switch </span>
    <u-switch v-model:value="switchValue" @update:value="handleChange"></u-switch>
    <u-switch v-model:value="switchValue" disabled></u-switch>
    <hr />
    <span>形状 </span>
    <u-switch v-model:value="switchValue1" @update:value="handleChange1" square></u-switch>
    <u-switch v-model:value="switchValue1" disabled square></u-switch>
    <hr />
    <hr />
  </div>
</template>

