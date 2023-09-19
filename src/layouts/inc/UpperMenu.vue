<template>
  <div class="container">
    <div class="box">
      <!-- <h1>Firmware Update</h1> -->
      <ul class="upperNav">
        <li>
          <router-link to="/profile" class="link">{{
            $t("profile")
          }}</router-link>
          <router-link to="/documents" class="link">{{
            $t("documents")
          }}</router-link>
          <router-link to="/editor" class="link">{{
            $t("editor")
          }}</router-link>
          <router-link to="/sample" class="link">{{
            $t("sample")
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

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
  /* padding-left: 20px; */
  width: 100%;
}
.box h1 {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #aaabab;
  margin-top: 60px;
}
.upperNav {
  /* width: 300px; */
}
.upperNav li {
  display: flex;
  flex-direction: row;

  list-style: none;
  height: 50px;
  font-size: 21px;
  line-height: 50px;
  text-align: center;
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
