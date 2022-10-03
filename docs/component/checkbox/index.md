<script setup>
import FormalCheckbox from './demo-page/formal-checkbox.vue'
import GroupCheckbox from './demo-page/group-checkbox.vue'
import PartCheckbox from './demo-page/part-checkbox.vue'
</script>

# Checkbox 多选框

## 基本用法
使用 `v-model:checked` 绑定值，`@update:checked` 监听值的变化；`name` 用于区分不同的多选框组合，`disabled` 可禁用多选框。
<ClientOnly>
  <FormalCheckbox />
</ClientOnly>

## 多选框组
使用 `u-checkbox-group` 包裹 `u-checkbox`，`name` 区分多选框组合，`v-model:value` 绑定值。
<ClientOnly>
  <GroupCheckbox />
</ClientOnly>

## 半选状态
适用于 `tree` 组件，使用 `indeterminate` 字段控制状态。
<ClientOnly>
  <PartCheckbox />
</ClientOnly>