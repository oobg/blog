<template>
  <div class="input-group">
    <!-- <label class="input-group-text" for="locale"><i class="bi bi-globe2"/></label> -->
    <span>Language</span>
    <select class="form-select" id="locale" v-model="$i18n.locale">
      <!--                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>-->
      <option value="ko">한국어</option>
      <option value="cz">Czech</option>
      <option value="en">Eng</option>
      <option value="de">German</option>
      <!-- <option value="pt">Português</option> -->
      <!-- <option value="kz">қазақ</option> -->
      <!-- <option value="es">Español</option> -->
    </select>
    <div class="selectArrow">
      <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66804 0.821604L10.1533 9.30688L18.6386 0.821603"
          stroke="#44403F"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.input-group {
  margin-left: 10px;
  text-align: left;
}
.input-group span {
  font-size: 1rem;
  color: #212529;
  font-weight: bold;
}
.form-select {
  padding: 8px 0;
  font-weight: bold;
  width: 100%;
  appearance: none;
  background: transparent;
  z-index: 3;
}
.selectArrow {
  position: absolute;
  top: 33px;
  right: 44px;
  z-index: -1;
  cursor: pointer !important;
}
</style>
