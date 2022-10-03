<script setup>
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