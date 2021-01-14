import peopleData from "./data/people.json";

export const people = {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    initialize({ commit, rootGetters }) {
      for (const item of peopleData) {
        const planet = rootGetters["planets/getById"](item.fields.homeworld);
        if (planet) item.fields.planet_name = planet.name;
        item.fields.searchString = item.fields.name.toLowerCase();
      }
      commit("SET", peopleData);
    }
  },
  mutations: {
    SET(state, data) {
      for (const item of data) {
        state.list.push(item.fields);
      }
    }
  }
};
