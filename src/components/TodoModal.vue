<template>
  <div>
    <b-button @click="$bvModal.show('new-task')">New task +</b-button>

    <b-modal id="new-task" hide-footer>
      <template #modal-title>Add a new task..</template>
      <b-form-group
        id="input-group-1"
        label="New task name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="name"
          placeholder="Enter task name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="New task description:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          placeholder="Enter task description"
          required
        ></b-form-input>
      </b-form-group>
      <b-button
        class="mt-3"
        block
        v-on:click="$emit('add-todo')"
        @click="$bvModal.hide('new-task')"
        >Submit</b-button
      >
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const TodoModal = Vue.component("todo-modal", {
  data() {
    return {
      name: "" as string,
      description: "" as string
    };
  }
});
export default TodoModal;
</script>

<style></style>
