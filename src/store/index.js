import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    token: ''
  },
  mutations: {
    updateToken(state ,value) {
      state.token=value;
    },
  },
  plugins: [
    createPersistedState()//注入持久化保存token的插件
  ]
})