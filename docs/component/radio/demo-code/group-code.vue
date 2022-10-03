<script setup>
import { ref } from "vue";
const checkedValue = ref("US");
const handleChange = (e) => {
  console.log("change", e.target.value);
};
</script>
<template>
  <div>
    <u-radio-group v-model:value="checkedValue" name="downtown">
      <u-radio @change="handleChange" label="China">China</u-radio>
      <u-radio label="US">US</u-radio>
      <u-radio label="RS">RS</u-radio>
      <u-radio label="ES" :checked="checkedValue == 'RS'" disabled>ES</u-radio>
    </u-radio-group>
  </div>
</template>
