<template>
  <div>
    <task-form @add-todo="addSummin"></task-form>
    <div class="todo-container w-50 mx-auto">
      <!--<TodoModal @add-todo="addSummin" /> -->
      <div class="card-container mx-auto">
        <TodoCard
          @remove-todo="deleteSummin"
          v-for="todo in todoList"
          :key="todo.id"
          :todoItem="todo"
        />
        <h1 class="no-task" v-if="todoList.length === 0">
          You're free, no tasks....
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoCard from "../components/TodoCard.vue";
import TaskForm from "../components/TaskForm.vue";
import { TodoItem } from "../types";
import { db } from "../db";

const TodoList = Vue.component("todo-list", {
  name: "TodoList",
  // Components being used here
  components: {
    TodoCard,
    TaskForm
  },
  data() {
    return {
      todoList: [] as TodoItem[]
    };
  },
  firestore: {
    todoList: db.collection("todos")
  },
  methods: {
    deleteSummin(todoItem: TodoItem) {
      db.collection("todos")
        .doc(todoItem.id)
        .delete();
    },
    addSummin(taskName: string, description: string) {
      db.collection("todos").add({
        name: taskName,
        description: description
      });
    }
  }
});

export default TodoList;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;
  row-gap: 10px;
  padding: 25px;
  margin: 15px;
  border: 2px solid black;
  border-radius: 30px;
}

.todo-container {
  text-align: right;
}

.no-task {
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: 0;
}
</style>
