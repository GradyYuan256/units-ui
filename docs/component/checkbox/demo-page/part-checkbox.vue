<script setup>
import PartCode from "../demo-code/part-code.vue";
import { partCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <PartCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="partCode" />
  </div>
</template>

<style>

</style>
