<script setup>
import PaginationCode from "../demo-code/pagination-code.vue";
import { paginationCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <PaginationCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="paginationCode" />
  </div>
</template>

<style>

</style>
