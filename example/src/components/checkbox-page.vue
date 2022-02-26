<script setup>
import { ref, watch } from "vue";
// import UCheckbox from "../components/checkbox/index.vue";
// import UCheckboxGroup from "../components/checkbox-group/index.vue";
// import UButton from "../components/button/index.vue";

let checkedV1 = ref(false)
let checkedV2 = ref(true)
let checkedV3 = ref(true)
const handleChange = (e) => {
  console.log("checkbox 点击事件：", e);
};

const handleChange1 = (e) => {
  console.log("checkbox 组 checked事件：", e);
};

const handleChange2 = (e) => {
  console.log("checkbox 组 change事件：", e);
};

watch(() => checkedV1.value, (newV, oldV) => {
  console.log('checkbox watch -->', newV, oldV);
})

const checkboxGroupValue = ref(['US', 'ES'])
watch(() => checkboxGroupValue.value, (newV, oldV) => {
  console.log('checkbox 组 watch -->', newV, oldV);
})

let partCheked = ref(false)
let indeterminate = ref(true)

</script>

<template>
  <div class="block-box">
    <span>基础 Checkbox </span>
    <u-checkbox v-model:checked="checkedV1" label="US" name="goji" @update:checked="handleChange">US</u-checkbox>
    <u-checkbox v-model:checked="checkedV2" label="ES" name="goji" @update:checked="handleChange">ES</u-checkbox>
    <u-checkbox v-model:checked="checkedV3" label="RS" name="goji">RS</u-checkbox>
    <u-checkbox v-model:checked="checkedV3" label="RS" name="goji" :disabled="true">RS</u-checkbox>
    <hr>
    <span>选项组 </span>
    <u-checkbox-group v-model:value="checkboxGroupValue" name="guoj" @update:value="handleChange2">
      <u-checkbox value="US" label="US" @update:checked="handleChange1"></u-checkbox>
      <u-checkbox value="ES" >ES</u-checkbox>
      <u-checkbox value="RS" disabled>ES</u-checkbox>
      <u-checkbox value="KS">KS</u-checkbox>
      <u-checkbox label="Null" @update:checked="handleChange1"></u-checkbox>
    </u-checkbox-group>
    <hr>
    <span>部分选中 </span>
    <u-checkbox v-model:checked="partCheked" :indeterminate="!partCheked && indeterminate" name="part">US</u-checkbox>
    <u-checkbox v-model:checked="partCheked" :indeterminate="indeterminate" name="part">ES</u-checkbox>
    <u-checkbox v-model:checked="partCheked" :indeterminate="!partCheked && indeterminate" disabled name="part">RS</u-checkbox>
    <span>&nbsp;&nbsp;</span>
    <u-button :type="partCheked ? 'primary' : ''" @click="partCheked = !partCheked">ALL</u-button>
    <u-button :type="indeterminate ? 'primary' : ''" @click="indeterminate = !indeterminate">PART</u-button>
    <hr>
  </div>
</template>

<style scoped>
</style>
