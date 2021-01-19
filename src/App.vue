<template>
  <div id="app">
    <TodoList :todoItems="todoList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "./components/TodoList.vue";

interface TodoItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {
  private todoList: TodoItem[] = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit"
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit"
    }
  ];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
