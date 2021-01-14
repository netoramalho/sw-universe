<template>
  <div class="home">
    <h1 class="h1">SW Universe</h1>
    <PeopleTable />
  </div>
</template>

<script>
import PeopleTable from "@/components/PeopleTable";

export default {
  name: "Home",
  components: {
    PeopleTable
  },
  created() {
    this.$store.dispatch("planets/initialize");
    this.$store.dispatch("people/initialize");
  }
};
</script>
