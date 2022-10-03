<script setup>
import { ref, watch } from "vue";
const updateValue = (e) => {
  console.log("checkbox 组 change 事件：", e);
};

const updateChecked = (e) => {
  console.log("checkbox 组 checked 事件：", e);
};

const checkboxGroupValue = ref(['US', 'ES'])
watch(() => checkboxGroupValue.value, (newV, oldV) => {
  console.log('checkbox 组 watch 事件：', newV, oldV);
})
</script>
<template>
  <div>
    <u-checkbox-group v-model:value="checkboxGroupValue" name="country" @update:value="updateValue">
      <u-checkbox value="US" label="US" @update:checked="updateChecked"></u-checkbox>
      <u-checkbox value="ES" >ES</u-checkbox>
      <u-checkbox value="RS" disabled>ES</u-checkbox>
      <u-checkbox value="KS">KS</u-checkbox>
      <u-checkbox label="Null" @update:checked="updateChecked"></u-checkbox>
    </u-checkbox-group>
  </div>
</template>