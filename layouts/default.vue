<template>
  <div>
    <slot />
    <ClientOnly>
      <Toast />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>