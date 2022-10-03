<script setup>
import RoundCode from "../demo-code/round-code.vue";
import { roundCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <RoundCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="roundCode" />
  </div>
</template>

<style>

</style>
