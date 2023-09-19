module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    // 미리 정의되지 않은 변수에 대한 오류를 방지합니다.
    "no-undef": "off",
    // prop의 타입을 생성자 함수로 지정해야 하는 ESLint 경고를 무시합니다.
    "vue/require-prop-type-constructor": "off"
  }
};
