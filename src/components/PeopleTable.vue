<template>
  <section>
    <v-text-field
      name="sw_search"
      v-model="search"
      append-icon="mdi-magnify"
      label="Search by name"
      single-line
      hide-details
      filled
      class="search"
      dark
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="results"
      :items-per-page="200"
      :search="search"
      hide-default-footer
      dark
      mobile-breakpoint="1000"
      class="table"
    >
      <template v-slot:item.created="{ item }">
        {{ $date(item.created).format("DD/MM/YYYY") }},
        {{ $date(item.created).fromNow() }}
      </template>
      <template v-slot:item.edited="{ item }">
        {{ $date(item.edited).format("DD/MM/YYYY") }},
        {{ $date(item.edited).fromNow() }}
      </template>
      <template v-slot:item.planet_name="{ item }">
        <v-btn
          color="darken-1"
          text
          :disabled="item.planet_name === 'unknown'"
          @click="openPlanetDialog(item.homeworld)"
          >{{ item.planet_name }}</v-btn
        >
      </template>
    </v-data-table>

    <PlanetDialog v-model="planetDialogDisplay" :id="planetDialogId" />
  </section>
</template>

<script>
import PlanetDialog from "@/components/PlanetDialog";

export default {
  components: {
    PlanetDialog
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Name", align: "start", value: "name" },
        { text: "Height (cm)", value: "height", filterable: false },
        { text: "Mass (kg)", value: "mass", filterable: false },
        { text: "Created", value: "created", filterable: false },
        { text: "Edited", value: "edited", filterable: false },
        {
          text: "Planet",
          value: "planet_name",
          filterable: false,
          align: "center"
        }
      ],
      planetDialogDisplay: false,
      planetDialogId: 0
    };
  },
  methods: {
    openPlanetDialog(planetId) {
      this.planetDialogDisplay = true;
      this.planetDialogId = planetId;
    }
  },
  computed: {
    results() {
      return this.$store.state.people.list;
    },
    planet() {
      if (!this.selectedPlanet) return false;
      return this.$store.getters["planets/getById"](this.selectedPlanet);
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes zoomIn {
  from {
    transform: scale(0.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

section {
  padding: 20px;
}
.table {
  max-width: 1000px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  transform: scale(0.2);
  opacity: 0;
  animation: zoomIn 1.5s forwards;
  animation-delay: 1s;
  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(0, 0, 0, 0.85) !important;
  }
}
.search {
  max-width: 300px;
  margin: 40px auto !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(10px);
  opacity: 0;
  animation: fade 1s forwards;
  animation-delay: 2.5s;
  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(0, 0, 0, 0.85) !important;
  }
}

/deep/
  .theme--dark.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: rgba(60, 60, 60, 0.3);
}
</style>
