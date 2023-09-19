<template>
  <base-layout>
    <template #header>
      <dot-header />
    </template>
    <template #default>
      <router-view />
    </template>
    <template #footer>
      <dot-footer />
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/layouts/template/BaseLayout.vue";
import DotHeader from "@/layouts/inc/AppHeader.vue";
import DotFooter from "@/layouts/inc/AppFooter.vue";
</script>

<style scoped></style>
