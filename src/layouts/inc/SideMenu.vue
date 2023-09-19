<template>
  <div class="container">
    <div class="box">
      <h1>{{ $t("Firmware Update") }}</h1>
      <ul class="sideNav">
        <li>
          <router-link
            to="/update/firmware/connect"
            class="link"
            :class="{
              'router-link-active': $route.path.includes(
                '/update/firmware/latest'
              ),
            }"
            >{{ $t("USB Update") }}
          </router-link>
        </li>
        <!-- <li> * 블루투스버전 추후 화면 기획시 적용 * 
          <router-link to="/bluetooth" class="link">{{
            $t("Bluetooth Update")
          }}</router-link>
        </li> -->
      </ul>
      <h1 v-if="false">{{ $t("VOC") }}</h1>
      <ul v-if="false" class="sideNav">
        <li>
          <router-link to="/" class="link">{{ $t("Bug Fixes") }} </router-link>
        </li>
        <li>
          <router-link to="/" class="link"
            >{{ $t("Functional Suggestion") }}
          </router-link>
        </li>
        <li>
          <router-link to="/" class="link">{{ $t("FAQ") }} </router-link>
        </li>
      </ul>
      <h1 v-if="state.isAdmin">{{ $t("Admin") }}</h1>
      <ul v-if="state.isAdmin" class="sideNav">
        <li>
          <router-link to="/admin/firmware/list" class="link"
            >{{ $t("Firmware Image Upload") }}
          </router-link>
        </li>
        <li v-if="false">
          <router-link to="/" class="link"
            >{{ $t("VOC Management") }}
          </router-link>
        </li>
        <li v-if="false">
          <router-link to="/" class="link"
            >{{ $t("FAQ Management") }}
          </router-link>
        </li>
        <li v-if="false">
          <router-link to="/" class="link"
            >{{ $t("Customer Statistics") }}
          </router-link>
        </li>
        <li v-if="false">
          <router-link to="/" class="link"
            >{{ $t("Service Statistics") }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { $session } from "framework";
import { reactive } from "vue";
const userRole = $session.getUserRoles()["dot-saas-support"];
const isAdmin = userRole?.includes("ADMIN") || false;

const state = reactive({
  isAdmin: isAdmin,
});
</script>

<style scoped>
.v-col-2 {
  border-right: 1px solid #d8d8d8 !important;
  box-sizing: border-box;
}
.container {
  /* background: #eee; */
  /* position: fixed;
  display: block;
  height: 100%;
  width: auto;
  box-sizing: border-box; */
}
.box {
  padding-left: 20px;
  width: 100%;
}
.box h1 {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #aaabab;
  margin-top: 60px;
}
.sideNav {
  /* width: 300px; */
}
.sideNav li {
  list-style: none;
  height: 50px;
  font-size: 21px;
  line-height: 50px;
  text-align: left;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #aaa;
  font-weight: bold;
}
.router-link-active {
  color: #ea5414;
}
.link:focus {
  color: #ea5414;
}
</style>
