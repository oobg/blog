<template>
  <v-app>
    <div ref="headerSlot" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <v-main>
      <v-container fluid fill-height>
        <v-row no-gutters v-if="$slots.upperMenu">
          <v-col cols="12" class="upper-menu">
            <div ref="upperMenuSlot">
              <slot name="upperMenu"></slot>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="fill-height">
          <v-col
            v-if="$slots.sideMenu"
            cols="2"
            sm="2"
            md="1"
            class="side-menu"
          >
            <slot name="sideMenu"></slot>
          </v-col>
          <v-col class="content-sheet">
            <v-sheet class="router-view-container">
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <div ref="footerSlot" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </v-app>
</template>

<script setup>
import "@/assets/css/layout.css";
import { ref, onMounted } from "vue";

const headerSlot = ref(null);
const footerSlot = ref(null);
const upperMenuSlot = ref(null);

onMounted(() => {
  const header = headerSlot.value?.children[0];
  const footer = footerSlot.value?.children[0];
  const upperMenu = upperMenuSlot.value?.children[0];
  const container = document.querySelector(".v-container");
  const sheet = document.querySelector(".content-sheet");

  if (container) {
    if (header) {
      container.style.top = `${header.offsetHeight}px`;
    }
    if (footer) {
      container.style.bottom = `${footer.offsetHeight}px`;
    }
  }

  if (sheet) {
    let headerHeight = "";
    let upperMenuHeight = "";
    let footerHeight = "";
    if (header) {
      headerHeight = `- ${header.offsetHeight}px`;
    }
    if (upperMenu) {
      upperMenuHeight = `- ${upperMenu.offsetHeight}px`;
    }
    if (footer) {
      footerHeight = `- ${footer.offsetHeight}px`;
    }
    sheet.style.maxHeight = `calc(100vh ${headerHeight} ${upperMenuHeight} ${footerHeight})`;
  }
});
</script>

<style scoped>
.v-container {
  padding: 0;
  position: absolute;
  bottom: 0;
}

.upper-menu {
  border-bottom: 1px solid #d9d9d9;
  max-height: 50px;
}

.side-menu {
  border-right: 1px solid #d9d9d9;
  min-width: 300px;
}

.content-sheet {
  max-height: 100vh;
  overflow-y: auto;
}

.router-view-container {
  height: 100%;
  overflow-y: auto;
}
</style>
