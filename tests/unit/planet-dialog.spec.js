import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import PlanetDialog from "@/components/PlanetDialog.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PlanetDialog.vue", () => {
  let store;
  let vuetify;
  let wrapper;
  let planet = {
    climate: "arid",
    name: "Tatooine",
    diameter: "10465",
    population: "200000"
  };

  beforeEach(() => {
    vuetify = new Vuetify();

    store = new Vuex.Store({
      modules: {
        planets: {
          getters: {
            getById: () => () => {
              return planet;
            }
          },
          namespaced: true
        }
      }
    });

    wrapper = mount(PlanetDialog, {
      store,
      localVue,
      vuetify,
      attachTo: document.body.setAttribute("data-app", true),
      propsData: { value: true, id: 1 }
    });
  });

  it("dialog is visible", () => {
    expect(wrapper.find(".v-dialog--active").exists()).toBe(true);
  });

  it("dialog is not visible", async () => {
    await wrapper.setProps({ value: false });
    expect(wrapper.find(".v-dialog--active").exists()).toBe(false);
  });

  it("display planet details", () => {
    expect(wrapper.find(".v-card__text").text()).toContain("Tatooine");
    expect(wrapper.find(".v-card__text").text()).toContain("10465");
    expect(wrapper.find(".v-card__text").text()).toContain("arid");
    expect(wrapper.find(".v-card__text").text()).toContain("200000");
  });

  // it("closes dialog after clicking on close btn", async () => {
  // });
});
