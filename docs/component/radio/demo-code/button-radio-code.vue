<script setup>
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
    <u-radio-group v-model:value="checkedValue" name="life1">
      <u-radio-button label="eat" disabled>吃饭</u-radio-button>
      <u-radio-button label="sleep" disabled>睡觉</u-radio-button>
      <u-radio-button label="water" disabled>洗脸</u-radio-button>
    </u-radio-group>
  </div>
</template>