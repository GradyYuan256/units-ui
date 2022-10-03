<script setup>
import DisabledCode from "../demo-code/disabled-code.vue";
import { disabledCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <DisabledCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="disabledCode" />
  </div>
</template>

<style>

</style>
