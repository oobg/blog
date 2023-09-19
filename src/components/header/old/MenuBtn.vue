<template>
  <div
    v-for="menus in state.menuList"
    :key="menus.MENU_NAME"
    class="d-flex flex-row"
  >
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          @click="handleMoveRouter(menus.MENU_URL)"
          :class="{ 'activator-button': !props, 'active-button': props }"
          class="gnb"
          text="Update"
          :ripple="false"
          >{{ menus.MENU_NAME }}</v-btn
        >
      </template>
      <v-list>
        <v-list-item v-for="(menu, i) in menus.children" :key="i">
          <router-link
            :to="menu.MENU_URL"
            active-class="active-link"
            class="active-link"
          >
            {{ menu.MENU_NAME }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, reactive, watch } from "vue";
import { $menu, $session } from "framework";
import global from "global";

interface MenuItem {
  MENU_ID: string;
  MENU_NAME: string;
  PARENT_MENU_ID: string;
  MENU_URL: string;
  SORT: number;
  children: MenuItem[];
}

const menuStore: { MENU_LIST: Promise<MenuItem[]> } = $menu();

const state = reactive({
  menuList: [] as MenuItem[],
});

watch(
  () => menuStore.MENU_LIST,
  async (newValue) => {
    state.menuList = await newValue;
  }
);

onMounted(() => {
  bindMenuList();
});

const bindMenuList = () => {
  if (global.isLogin()) {
    const menu = $menu();
    const userRole = $session.getUserRoles("dot-saas-support");
    menu.bindMenuList(userRole);
  } else {
    global.setSession();
  }
};

const router = useRouter();
const handleMoveRouter = (routerLink: string) => {
  router.push(routerLink);
};
</script>

<style scoped>
.gnb {
  font-size: 24px;
  font-weight: bold;
  text-transform: initial; /* 텍스트 기본값 */
  letter-spacing: 0;
}
.gnb:hover {
  opacity: 1;
}
.activator-button {
  /* color: #555; */
}

.active-link {
  text-decoration: none;
  font-size: 18px;
  color: #4b4b4b;
}
.active-link:hover {
  color: #ea5414;
}
.active-button {
  color: #ea5414;
}
</style>
