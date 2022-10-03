<script setup>
import ButtonRadioCode from "../demo-code/button-radio-code.vue";
import { buttonRadioCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <ButtonRadioCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="buttonRadioCode" />
  </div>
</template>

<style>

</style>
