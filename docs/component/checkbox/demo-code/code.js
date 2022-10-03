export const formalCode = `<script setup>
import { ref, watch } from "vue";
const handleChange = (value) => {
  console.log("change", value);
};
let checkedV1 = ref(true);
let checkedV2 = ref(false);
let checkedV3 = ref(true);
watch(() => checkedV1.value, (newV, oldV) => {
  console.log('watch', newV, oldV);
});
</script>
<template>
  <div>
    <u-checkbox v-model:checked="checkedV1" label="US" @update:checked="handleChange">US</u-checkbox>
    <u-checkbox v-model:checked="checkedV2" label="ES" @update:checked="handleChange">ES</u-checkbox>
    <u-checkbox v-model:checked="checkedV3" label="RS">RS</u-checkbox>
    <u-checkbox v-model:checked="checkedV3" label="RS" disabled>RS</u-checkbox>
  </div>
</template>
`
export const groupCode = `<script setup>
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
`
export const partCode = `<script setup>
import { ref, watch } from "vue";
let partChecked = ref(false)
let indeterminate = ref(true)
</script>
<template>
  <div>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="!partChecked && indeterminate" 
                name="part"
    >US</u-checkbox>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="indeterminate" 
                name="part"
    >ES</u-checkbox>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="!partChecked && indeterminate" 
                name="part"
                disabled 
    >RS</u-checkbox>
    <p></p>
    <span>操作：</span>
    <u-button :type="partChecked ? 'primary' : ''" 
              @click="partChecked = !partChecked"
    >ALL</u-button>
    <u-button :type="indeterminate ? 'primary' : ''" 
              @click="indeterminate = !indeterminate"
    >PART</u-button>
  </div>
</template>
`