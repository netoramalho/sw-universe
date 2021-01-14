import planetsData from "./data/planets.json";

export const planets = {
  namespaced: true,
  state: {
    list: new Map()
  },
  actions: {
    initialize({ commit }) {
      commit("SET", planetsData);
    }
  },
  mutations: {
    SET(state, data) {
      for (const item of data) {
        state.list.set(item.pk, item.fields);
      }
    }
  },
  getters: {
    getById: state => id => {
      return state.list.get(id);
    }
  }
};
