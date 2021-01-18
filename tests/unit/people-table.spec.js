import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import PeopleTable from "@/components/PeopleTable.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PeopleTable.vue", () => {
  let store;
  let vuetify;
  let wrapper;
  let people = [
    {
      name: "Ackbar",
      created: "2014-12-18T11:07:50.584Z",
      edited: "2014-12-20T21:17:50.362Z",
      height: "180",
      mass: "83",
      planet_name: "Mon Cala"
    },
    {
      name: "Zam Wesell",
      created: "2014-12-20T16:57:44.471Z",
      edited: "2014-12-20T21:17:50.468Z",
      height: "168",
      mass: "55",
      planet_name: "Zolan"
    }
  ];

  beforeEach(() => {
    vuetify = new Vuetify();

    store = new Vuex.Store({
      modules: {
        people: {
          state: {
            list: people
          },
          namespaced: true
        }
      }
    });

    wrapper = mount(PeopleTable, {
      store,
      localVue,
      vuetify,
      attachTo: document.body.setAttribute("data-app", true)
    });
  });

  it("rows equal people array size", () => {
    const rows = wrapper.findAll("tbody tr");
    expect(rows.length).toEqual(people.length);
  });

  it("mandatory columns", () => {
    const columns = wrapper.find("thead tr").text();
    expect(columns).toContain("Name");
    expect(columns).toContain("Height");
    expect(columns).toContain("Mass");
    expect(columns).toContain("Created");
    expect(columns).toContain("Edited");
    expect(columns).toContain("Planet");
  });

  it("search by name", async () => {
    wrapper.setData({ search: people[0].name });
    await wrapper.vm.$nextTick();
    const rows = wrapper.findAll("tbody tr");
    expect(rows.length).toEqual(1);
    const columns = rows.at(0).findAll("td");
    expect(columns.at(0).text()).toContain(people[0].name);
  });

  it("order name asc", async () => {
    await wrapper.find("thead tr th").trigger("click");
    const rows = wrapper.findAll("tbody tr");
    expect(rows.at(0).text()).toContain(people[0].name);
    expect(rows.at(1).text()).toContain(people[1].name);
  });

  it("order name desc", async () => {
    await wrapper.find("thead tr th").trigger("click");
    await wrapper.find("thead tr th").trigger("click");
    const rows = wrapper.findAll("tbody tr");
    expect(rows.at(0).text()).toContain(people[1].name);
    expect(rows.at(1).text()).toContain(people[0].name);
  });
});
