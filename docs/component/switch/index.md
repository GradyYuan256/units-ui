<script setup>
import FormalSwitch from './demo-page/formal-switch.vue'
import SquareSwitch from './demo-page/square-switch.vue'
</script>

# Switch 开关

## 基本用法
使用 `v-model:value` 绑定值，`@update:value` 可监听值的变化；`disabled` 可禁用开关。
<ClientOnly>
  <FormalSwitch />
</ClientOnly>

## 方形开关
使用 `v-model:value` 绑定值，`@update:value` 可监听值的变化；`disabled` 可禁用开关；添加 `square` 字段可改变开关形状。
<ClientOnly>
  <SquareSwitch />
</ClientOnly>
