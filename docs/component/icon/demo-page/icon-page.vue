<script setup>
import IconCode from "../demo-code/icon.vue";
import { iconCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <IconCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="iconCode" />
  </div>
</template>

<style>

</style>
