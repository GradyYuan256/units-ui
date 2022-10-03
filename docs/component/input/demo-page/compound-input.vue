<script setup>
import CompoundCode from "../demo-code/compound-code.vue";
import { compoundCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <CompoundCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="compoundCode" />
  </div>
</template>

<style>

</style>
