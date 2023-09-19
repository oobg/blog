<template>
  <v-btn
    variant="text"
    :ripple="false"
    style="font-size: 16px; text-transform: none; color: #212529"
    @click="login"
    >{{ $t("로그인") }}</v-btn
  >
  <!-- <v-btn
    variant="text"
    :ripple="false"
    style="font-size: 16px; text-transform: none; color: #212529"
    @click="login"
    v-if="!state.isLogin"
    >{{ $t("로그인") }}</v-btn
  >
  <v-menu v-else-if="state.isLogin">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        style="
          width: 56px;
          height: 56px;
          border-radius: 50%;
          font-size: 32px;
          font-weight: bold;
          color: #fff;
          background: #aaabab;
          text-transform: initial;
          text-transform: none;
        "
        :ripple="false"
        >{{ state.userInfo.NAME }}</v-btn
      >
    </template>
    <v-list
      style="
        background: #aaabab;
        width: 160px;
        margin-top: 10px;
        box-shadow: none;
      "
    >
      <v-list-item class="list">
        <v-list-item-title>
          <v-btn
            variant="text"
            class="listBtn"
            @click="profile"
            :ripple="false"
            >{{ $t("프로필") }}</v-btn
          >
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="list">
        <v-list-item-title>
          <v-btn
            variant="text"
            class="listBtn"
            @click="logOut"
            :ripple="false"
            >{{ $t("로그아웃") }}</v-btn
          >
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu> -->
</template>

<script setup></script>

<style scoped>
.list {
  min-height: 0;
  height: 38px;
  padding: 0;
  text-align: left;
}
.list:hover {
  background: #ea5414;
}
.listBtn {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding: 0;
  letter-spacing: 0;
  width: 100%;
  justify-content: flex-start;
}
</style>
