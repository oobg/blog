<template>
  <!-- <div
    v-for="menu in state.menuList"
    :key="menu.MENU_NAME"
    class="d-flex flex-row"
  >
    <v-btn
      @click="navigateToMenu(menu.MENU_URL)"
      variant="plain"
      :ripple="false"
      class="gnb"
      :class="{ 'gnb-active': isActive(menu.MENU_URL) }"
      >{{ menu.MENU_NAME }}</v-btn
    >
  </div> -->
  <div>메뉴버튼</div>
</template>

<script setup></script>

<style scoped>
.gnb {
  font-size: 24px !important;
  font-weight: bold;
  letter-spacing: 0;
  color: #aaabab;
  margin-left: 2rem;
}
.gnb:hover,
.gnb-active {
  opacity: 1;
  color: #ea5414;
}
</style>
