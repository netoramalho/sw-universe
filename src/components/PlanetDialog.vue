<template>
  <v-dialog :value="value" @input="$emit('input', $event)" width="500">
    <v-card v-if="planet" dark>
      <v-card-text class="pt-5">
        <div class="text-subtitle-1">Planet</div>
        <div class="text-h3">{{ planet.name }}</div>

        <div class="text-subtitle-1 pt-3">Diameter</div>
        <div class="text-h3">{{ planet.diameter }}</div>

        <div class="text-subtitle-1 pt-3">Climate</div>
        <div class="text-h3">{{ planet.climate }}</div>

        <div class="text-subtitle-1 pt-3">Population</div>
        <div class="text-h3">{{ planet.population }}</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click.native="$emit('input', false)">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    planet() {
      if (!this.id) return false;
      return this.$store.getters["planets/getById"](this.id);
    }
  }
};
</script>

<style></style>
