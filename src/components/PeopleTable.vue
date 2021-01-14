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
        { text: "Height (cm)", value: "height" },
        { text: "Mass (kg)", value: "mass" },
        { text: "Created", value: "created" },
        { text: "Edited", value: "edited" },
        { text: "Planet", value: "planet_name" }
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
