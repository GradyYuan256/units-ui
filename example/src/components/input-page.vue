<script setup>
import { ref, watch } from "vue";
// import UInput from "../components/input/index.vue";
// import UIcon from "../components/icon/index.vue";

let textValue = ref('as')
watch(textValue, (newV) => {
  console.log('basic input --> ', newV);
})
</script>

<template>
  <div class="block-box">
    <span>基础 Input </span>
    <u-input v-model:value="textValue" placeholder="请输入内容"></u-input>
    <h3>{{textValue}}</h3>
    <hr>
    <span>使用清除功能 Input </span>
    <u-input v-model:value="textValue" clearable></u-input>
    <hr>
    <span>复合型输入框 </span>
    <u-input>
      <template v-slot:prepend>CRUL: </template>
      <template v-slot:append><u-icon name="plus"></u-icon></template>
    </u-input>
    &nbsp;
    <u-input>
      <template v-slot:append><u-icon name="plus"></u-icon></template>
    </u-input>
    <hr>
    <span>文本框 </span>
    <u-input type="textarea"></u-input>
    <hr>
    <span>禁用 Input </span>
    <u-input type="textarea" disabled></u-input>
    &nbsp;
    <u-input disabled>
      <template v-slot:append><u-icon name="plus"></u-icon></template>
    </u-input>
  </div>
</template>

