<template>
  <div class="todo-container mx-auto w-50">
    <b-card class="card-body" v-for="item in todoItems" v-bind:key="item.id">
      <h5 class="id">Task no. {{ item.id }}</h5>
      <b-card-header class="card-header" header-text-variant="black">
        {{ item.name }}
      </b-card-header>
      <b-card-text class="card-text">{{ item.description }} </b-card-text>
      <p class="buttons">
        <a class="modify-button delete-btn" href="#">
          <font-awesome-icon icon="trash-alt" />
        </a>
        <a class="modify-button update-btn" href="#">
          <font-awesome-icon icon="edit" />
        </a>
      </p>
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
<style scoped>
.card-header {
  background-color: #f8f1f1;
}

.buttons {
  text-align: right;
  margin: 0;
}

.card-text {
  padding: 20px 12px 20px 12px;
  margin: 0;
}

.modify-button {
  font-size: 25px;
}

.delete-btn {
  color: #ef4f4f;
}

.update-btn {
  color: #74c7b8;
  margin-left: 10px;
}

.todo-container {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;
  row-gap: 10px;
  padding: 25px;
  margin: 15px;
  border: 2px solid black;
  border-radius: 30px;
}

.id {
  margin: 0;
  text-align: left;
  text-decoration: underline;
}

.card-body {
  border-radius: 30px;
  background-color: #f8f1f1;
  padding: 10px 10px 10px 10px;
}
</style>
