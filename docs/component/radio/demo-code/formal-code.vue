<script setup>
import { ref } from 'vue'
const checkedValue = ref('US')
const handleChange = (e) => {
  console.log('change', e.target.value)
}
</script>
<template>
  <div>
    <u-radio
      v-model:value="checkedValue"
      @change="handleChange"
      label="China"
      name="country"
    >
      <span>China</span>
    </u-radio>
    <u-radio v-model:value="checkedValue" label="US" name="country">US</u-radio>
    <u-radio v-model:value="checkedValue" label="RS" name="country">RS</u-radio>
    <u-radio disabled :checked="checkedValue=='RS'" label="JP" name="country">JP</u-radio>
  </div>
</template>
