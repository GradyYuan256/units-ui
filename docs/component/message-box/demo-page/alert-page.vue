<script setup>
import AlertCode from "../demo-code/alert-code.vue";
import { alertCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <AlertCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="alertCode" />
  </div>
</template>

<style>

</style>
