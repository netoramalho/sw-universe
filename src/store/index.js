import Vue from "vue";
import Vuex from "vuex";

import { people } from "@/store/people";
import { planets } from "@/store/planets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    people,
    planets
  }
});
