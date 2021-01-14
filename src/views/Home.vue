<template>
  <section>
    <PeopleTable />
  </section>
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
