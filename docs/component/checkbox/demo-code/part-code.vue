<script setup>
import { ref, watch } from "vue";
let partChecked = ref(false)
let indeterminate = ref(true)
</script>
<template>
  <div>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="!partChecked && indeterminate" 
                name="part"
    >US</u-checkbox>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="indeterminate" 
                name="part"
    >ES</u-checkbox>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="!partChecked && indeterminate" 
                name="part"
                disabled 
    >RS</u-checkbox>
    <p></p>
    <span>操作：</span>
    <u-button :type="partChecked ? 'primary' : ''" 
              @click="partChecked = !partChecked"
    >ALL</u-button>
    <u-button :type="indeterminate ? 'primary' : ''" 
              @click="indeterminate = !indeterminate"
    >PART</u-button>
  </div>
</template>