<script setup>
import { ref, watch } from 'vue'
// import URadio from '../components/radio/index.vue'
// import URadioButton from '../components/radio/radio-button.vue'
// import URadioGroup from '../components/radio-group/index.vue'
// import UIcon from '../components/icon/index.vue'

let checkedV1 = ref('US')
let checkedV2 = ref('sleep')
let checkedV3 = ref('RS')
const handleChange1 = (v) => {
  console.log("radio 点击事件：", v);
};
const handleChange4 = (e) => {
  console.log("radio change 事件：", e.target.value);
};
const handleChange2 = (e) => {
  console.log("radio button 点击事件：", e.target.value);
};
const handleChange3 = (e) => {
  console.log("radio 组 点击事件：", e.target.value);
};

watch(() => checkedV2.value, (newV, oldV) => {
  console.log('button 单选组合 watch -->', newV, oldV);
})
watch(() => checkedV3.value, (newV, oldV) => {
  console.log('普通单选组合 watch -->', newV, oldV);
})
</script>

<template>
  <div class="block-box">
    <span>基础 Radio </span>
    <u-radio v-model:value="checkedV1" @change="handleChange4" @update:value="handleChange1" label="China" name="goji">
      <span>China</span>
      <u-icon name="refresh"></u-icon>
    </u-radio>
    <u-radio v-model:value="checkedV1" label="US" name="goji">US</u-radio>
    <u-radio v-model:value="checkedV1" label="RS" name="goji">RS</u-radio>
    <u-radio v-model:value="checkedV1" label="ES" :checked="checkedV1 == 'ES'" :disabled="true">ES</u-radio>
    <hr>
    <span>普通单选组合 </span>
    <u-radio-group v-model:value="checkedV3" name="country">
      <u-radio @change="handleChange3" label="China">China</u-radio>
      <u-radio label="US">US</u-radio>
      <u-radio label="RS">RS</u-radio>
      <u-radio label="ES" :checked="checkedV3 == 'ES'" :disabled="true">ES</u-radio>
    </u-radio-group>
    <u-radio-group v-model:value="checkedV3" name="country">
      <u-radio label="China" disabled>China</u-radio>
      <u-radio label="US" disabled>US</u-radio>
      <u-radio label="RS" disabled>RS</u-radio>
      <u-radio label="ES" disabled>ES</u-radio>
    </u-radio-group>
    <hr>
    <span>单选 button 组合 </span>
    <u-radio-group v-model:value="checkedV2" name="life">
      <u-radio-button label="eat" @change="handleChange2">吃饭</u-radio-button>
      <u-radio-button label="sleep">睡觉</u-radio-button>
      <u-radio-button label="water">洗脸</u-radio-button>
      <u-radio-button label="..." disabled="">打豆豆</u-radio-button>
    </u-radio-group>
    <u-radio-group v-model:value="checkedV2" name="life">
      <u-radio-button label="eat" disabled>吃饭</u-radio-button>
      <u-radio-button label="sleep" disabled>睡觉</u-radio-button>
      <u-radio-button label="water" disabled>洗脸</u-radio-button>
      <u-radio-button label="..." disabled="">打豆豆</u-radio-button>
    </u-radio-group>
    
  </div>
</template>

