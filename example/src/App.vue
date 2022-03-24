<script setup>
import IconsPage from './components/icons-page.vue'
import ButtonPage from './components/button-page.vue'
import RadiosPage from './components/radios-page.vue'
import CheckboxPage from './components/checkbox-page.vue'
import SwitchPage from './components/switch-page.vue'
import DialogPage from './components/dialog-page.vue'
import ToastPage from './components/toast-page.vue'
</script>

<template>
  <main>
    <icons-page></icons-page>
    <button-page></button-page>
    <radios-page></radios-page>
    <switch-page></switch-page>
    <checkbox-page></checkbox-page>
    <dialog-page></dialog-page>
    <toast-page></toast-page>
  </main>
</template>

<style>
.block-box {
  border: 2px solid grey;
  padding: 10px;
  margin: 20px 0;
}
</style>
