<template>
  <div>
    <div class="card-inner">
      <h5 class="id">Task no. {{ todoItem.id }}</h5>
      <b-card-text class="card-text">
        Task Name: {{ todoItem.name }}
      </b-card-text>
      <b-card-text class="card-text"
        >Description: {{ todoItem.description }}
      </b-card-text>
      <p class="buttons">
        <a class="modify-button delete-btn" href="#">
          <font-awesome-icon icon="trash-alt" />
        </a>
        <a class="modify-button update-btn" href="#">
          <font-awesome-icon icon="edit" />
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { TodoItem } from "../types";

const TodoCard = Vue.component("todo-card", {
  props: {
    todoItem: {
      type: Object as PropType<TodoItem>
    }
  }
});

export default TodoCard;
</script>

<style>
.buttons {
  text-align: right;
  margin: 0;
}

.card-text {
  padding: 12px 20px 12px 12px;
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

.id {
  margin: 0;
  text-align: left;
  text-decoration: underline;
}

.card-inner {
  border-radius: 30px;
  background-color: #f8f1f1;
  text-align: left;
  padding: 20px;
}
</style>
