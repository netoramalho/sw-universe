<template>
  <div>
    <h3>People Table</h3>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="results"
      :items-per-page="200"
      :search="search"
      hide-default-footer
      dark
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Name", align: "start", value: "name" },
        { text: "Height (cm)", value: "height", filterable: false },
        { text: "Mass (kg)", value: "mass", filterable: false },
        { text: "Created", value: "created", filterable: false },
        { text: "Edited", value: "edited", filterable: false },
        { text: "Planet", value: "planet_name", filterable: false }
      ]
    };
  },
  computed: {
    results() {
      return this.$store.state.people.list;
    }
  }
};
</script>

<style></style>
