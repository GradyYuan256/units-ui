<template>
  <div>
    <u-input>
      <template v-slot:prepend>URL: </template>
      <template v-slot:append><u-icon name="refresh"></u-icon></template>
    </u-input>
    <p></p>
    <u-input disabled>
      <template v-slot:append><u-icon name="refresh"></u-icon></template>
    </u-input>
  </div>
</template>