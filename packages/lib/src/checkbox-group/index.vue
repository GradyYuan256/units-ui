<script>
export default {
    name: 'UCheckboxGroup'
}
</script>
<script setup>
import { watch, reactive, provide, getCurrentInstance } from "vue"
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  value: {
    type: Array,
    default: function() {
      return []
    }
  },
  max: {
    type: Number,
    default: undefined,
  },
  min: {
    type: Number,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

let propsData = reactive({
    value: props.value,
})
watch(() => props.value, (v) => {
    propsData.value = v
}, {deep:true})

provide('checkboxGroupInstance', getCurrentInstance())
provide('value', propsData)
provide('name', props.name)
provide('max', props.max)
provide('min', props.min)
provide('disabled', props.disabled)
</script>
<template>
  <div class="u-radio-group">
    <slot></slot>
  </div>
</template>

