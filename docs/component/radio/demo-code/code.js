export const formalCode = `<script setup>
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
`

export const groupCode = `<script setup>
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
`

export const buttonRadioCode = `<script setup>
import { ref } from "vue";
const checkedValue = ref("sleep");
</script>
<template>
  <div>
    <u-radio-group v-model:value="checkedValue" name="life">
      <u-radio-button label="eat">吃饭</u-radio-button>
      <u-radio-button label="sleep">睡觉</u-radio-button>
      <u-radio-button label="water">洗脸</u-radio-button>
      <u-radio-button disabled>打豆豆</u-radio-button>
    </u-radio-group>
    <u-radio-group v-model:value="checkedValue" name="disabled-life">
      <u-radio-button label="eat" disabled>吃饭</u-radio-button>
      <u-radio-button label="sleep" disabled>睡觉</u-radio-button>
      <u-radio-button label="water" disabled>洗脸</u-radio-button>
    </u-radio-group>
  </div>
</template>
`
