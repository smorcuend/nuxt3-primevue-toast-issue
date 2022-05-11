<template>
  <div>
    <h1>A very strange bug</h1>
    <Button label="Trigger toast" @click="triggerToast"></Button>
  </div>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp();
const triggerToast = () => {
  $toast.add({
    severity: "success",
    summary: "Success Message",
    detail: "Order submitted",
    life: 3000
  });
};
</script>

<style scoped></style>
