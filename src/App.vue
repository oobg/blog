<template>
  <v-app>
    <component :is="layout" />
  </v-app>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layout = ref();

watch(
  () => route.meta.layout,
  (newLayout) => {
    layout.value = newLayout;
  }
);
</script>

