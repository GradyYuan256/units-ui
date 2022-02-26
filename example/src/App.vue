<script setup>
import IconsPage from './components/icons-page.vue'
import ButtonPage from './components/button-page.vue'
import RadiosPage from './components/radios-page.vue'
import CheckboxPage from './components/checkbox-page.vue'
</script>

<template>
  <main>
    <icons-page></icons-page>
    <button-page></button-page>
    <radios-page></radios-page>
    <checkbox-page></checkbox-page>
  </main>
</template>

<style>
.block-box {
  border: 2px solid grey;
  padding: 10px;
  margin: 20px 0;
}
</style>
