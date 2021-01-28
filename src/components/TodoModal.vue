<template>
  <div>
    <b-button @click="$bvModal.show('new-task')">New task +</b-button>

    <b-modal id="new-task" hide-footer>
      <template #modal-title>Add a new task..</template>
      <div class="d-block text-center"></div>
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
const TodoModal = Vue.component("todo-modal", {});
export default TodoModal;
</script>

<style></style>
