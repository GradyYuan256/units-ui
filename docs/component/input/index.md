<script setup>
import FormalInput from './demo-page/formal-input.vue'
import CompoundInput from './demo-page/compound-input.vue'
</script>

# Input 输入框

## 基本用法
使用 `v-model:value` 绑定值，可设置 `placeholder`，`type` 的值有 `text | textarea`，默认值是 `text`，`disabled` 可禁用输入框，设置 `clearable` 字段可拥有清除功能。
<ClientOnly>
  <FormalInput />
</ClientOnly>

## 复合输入框
使用 `slot` 的方式插入前缀（`prepend`）和后缀（`append`）。
<ClientOnly>
  <CompoundInput />
</ClientOnly>