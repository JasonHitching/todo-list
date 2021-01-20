<template>
  <div>
    <b-button>New task +</b-button>
    <div class="todo-container mx-auto w-50">
      <TodoCard v-for="todo in todoList" :key="todo.id" :todoItem="todo" />
      <h1 class="no-task" v-if="!todoList.length">You're free, no tasks!</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoCard from "../components/TodoCard.vue";
import { TodoItem } from "../types";

@Component({
  components: {
    TodoCard
  }
})
export default class TodoList extends Vue {
  private todoList: TodoItem[] = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit"
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit"
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit"
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit"
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit"
    }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.no-task {
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: 0;
}
</style>
