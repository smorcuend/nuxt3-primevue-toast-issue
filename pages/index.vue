<template>
  <div>
    <h1>PrimeVue Toast: A very strange bug with setup syntax</h1>
    <Button
      label="Trigger toast with useNuxtApp"
      @click="triggerToastGlobal"
      class="m-4"
    ></Button>
    <Button
      label="Trigger toast with useToast"
      @click="triggerToastComposition"
      class="m-4"
    ></Button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app";
import { useToast } from "primevue/usetoast";
const { $toast } = useNuxtApp();

const triggerToastGlobal = () => {
  $toast.add({
    severity: "success",
    summary: "Success Message",
    detail: "Order submitted",
    life: 3000
  });
};
const triggerToastComposition = () => {
  const toast = useToast();
  toast.add({
    severity: "info",
    summary: "Info Message",
    detail: "Message Content",
    life: 3000
  });
};
</script>

<style scoped>
.m-4 {
  margin: 2rem;
}
</style>
