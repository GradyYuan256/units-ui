<script setup>
import IconsPage from './components/icons-page.vue'
import ButtonPage from './components/button-page.vue'
import RadiosPage from './components/radios-page.vue'
import CheckboxPage from './components/checkbox-page.vue'
import SwitchPage from './components/switch-page.vue'
import DialogPage from './components/dialog-page.vue'
import ToastPage from './components/toast-page.vue'
import MessagePage from './components/message-page.vue'
import MessageBoxPage from './components/message-box-page.vue'
import InputPage from './components/input-page.vue'
import PaginationPage from './components/pagination-page.vue'
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
    <message-page></message-page>
    <message-box-page></message-box-page>
    <input-page></input-page>
    <pagination-page></pagination-page>
  </main>
</template>

<style>
.block-box {
  border: 2px solid grey;
  padding: 10px;
  margin: 20px 0;
}
</style>
