<template>
  <div class="home">
    <h1 class="h1">SW Universe</h1>
    <SearchField />
    <PeopleTable />
  </div>
</template>

<script>
import SearchField from "@/components/SearchField";
import PeopleTable from "@/components/PeopleTable";

export default {
  name: "Home",
  components: {
    SearchField,
    PeopleTable
  }
};
</script>
