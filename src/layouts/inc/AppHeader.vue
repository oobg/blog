<template>
  <v-app-bar :elevation="0" class="header">
    <v-toolbar-title class="logo">
      <router-link to="/" class="link">
        <img src="../../assets/logo.png" alt="this is logo section" />
      </router-link>
    </v-toolbar-title>
    <btn-menu></btn-menu>
    <v-spacer></v-spacer>
    <btn-login></btn-login>
    <btn-lang-change></btn-lang-change>
  </v-app-bar>
</template>

<script setup>
import BtnMenu from "@/components/header/MenuBtn.vue";
import BtnLangChange from "@/components/header/LangChangeBtn.vue";
import BtnLogin from "@/components/header/LoginBtn.vue";
</script>

<style scoped>
.header {
  padding: 10px 2%;
  border-bottom: 1px solid #d9d9d9;
  height: 84px;
}
.logo {
  flex: none;
  margin: 0;
}
</style>
