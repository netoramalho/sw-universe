<template>
  <v-app>
    <v-main class="main">
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #01021a;
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
}
</style>
