export const formalCode = `<script setup>
import { ref, watch } from "vue";

let textValue = ref()
watch(textValue, (newV) => {
  console.log('basic input --> ', newV);
})
</script>
<template>
  <div>
    <p>
      输入框：<u-input v-model:value="textValue" placeholder="请输入..." clearable></u-input>
      <span> 结果：{{ textValue }}</span>
    </p>
    <p>文本域：<u-input type="textarea"></u-input></p>
    <p>禁用状态：<u-input placeholder="请输入内容" disabled></u-input></p>
  </div>
</template>
`

export const compoundCode = `<template>
  <div>
    <u-input>
      <template v-slot:prepend>URL: </template>
      <template v-slot:append><u-icon name="refresh"></u-icon></template>
    </u-input>
    <p></p>
    <u-input>
      <template v-slot:append><u-icon name="refresh"></u-icon></template>
    </u-input>
  </div>
</template>
`