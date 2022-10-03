<script setup>
import FormalRadio from './demo-page/formal-radio.vue'
import GroupRadio from './demo-page/group-radio.vue'
import ButtonRadio from './demo-page/button-radio.vue'
</script>

# Radio 单选框

## 基本用法
使用 `v-model:value` 绑定值，`@change` 可监听值的变化；`name` 用于区分不同的单选框组合，`disabled` 可禁用单选框，`checked` 表示选中状态。
<ClientOnly>
  <FormalRadio />
</ClientOnly>

## 单选框组合
使用 `u-radio-group` 包裹 `u-radio`，`name` 区分单选框组合，`v-model:value` 绑定值。
<ClientOnly>
  <GroupRadio />
</ClientOnly>

## 单选框按钮组
使用 `u-radio-group` 包裹 `u-radio-button`，`name` 区分单选框组合，`v-model:value` 绑定值。
<ClientOnly>
  <ButtonRadio />
</ClientOnly>
