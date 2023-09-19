// 예시용 pinia 객체
import { defineStore } from "pinia";

export const useSiteStore = defineStore({
  id: "site",
  /// 상태를 저장하는 객체
  state: () => ({
    compNo: null,
    topMenuId: null,
    param: null,
  }),
  /// 스테이트로부터 다른 값을 계산하기 위해 사용되는 메서드들을 정의하는 객체
  getters: {},
  /// 비동기 처리 및 외부 API 통신과 같은 비즈니스 로직을 처리하는 메서드들을 정의하는 객체
  actions: {},
});
