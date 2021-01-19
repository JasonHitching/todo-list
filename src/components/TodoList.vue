<template>
  <div class="mx-auto w-50">
    <b-card
      class="w-50"
      v-for="item in todoItems"
      v-bind:key="item.id"
      text-variant="black"
    >
      <b-card-header header-text-variant="black">
        {{ item.name }}
      </b-card-header>
      <b-card-text>
        {{ item.description }}
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoList extends Vue {
  @Prop() private todoItems!: [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
