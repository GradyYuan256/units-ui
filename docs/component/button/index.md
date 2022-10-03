<script setup>
import FormalButton from './demo-page/formal-button.vue'
import PlainButton from './demo-page/plain-button.vue'
import DisabledButton from './demo-page/disabled-button.vue'
import RoundButton from './demo-page/round-button.vue'
import CircleButton from './demo-page/circle-button.vue'
import SizeButton from './demo-page/size-button.vue'
import GroupButton from './demo-page/group-button.vue'
</script>

# Button 按钮

## 基本用法
根据 `type` 来选择样式，对应的值有 `primary | info | success | warning | error`，默认是 `default`。
<ClientOnly>
  <FormalButton />
</ClientOnly>

## 朴素按钮
可以添加 `plain` 字段改变按钮样式。
<ClientOnly>
  <PlainButton />
</ClientOnly>

## 禁用按钮
可以添加 `disabled` 字段禁用按钮。
<ClientOnly>
  <DisabledButton />
</ClientOnly>

## 圆角按钮
可以添加 `round` 字段使按钮有圆角效果。
<ClientOnly>
  <RoundButton />
</ClientOnly>

## 圆形按钮
可以添加 `round` 字段使按钮变成圆形。
<ClientOnly>
  <CircleButton />
</ClientOnly>

## 不同尺寸
根据 `size` 设置按钮尺寸大小，对应的值有 `medium | small | mini`，默认是正常大小的按钮。
<ClientOnly>
  <SizeButton />
</ClientOnly>

## 按钮组
使用 `u-button-group` 包裹 `u-button` 就可以实现按钮组。
<ClientOnly>
  <GroupButton />
</ClientOnly>


