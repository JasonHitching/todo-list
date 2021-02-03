<template>
  <!-- Component for handling the displaying and hiding of an add task form -->
  <div class="form-container mx-auto w-50">
    <b-button class="add-task-btn" v-if="!addTask" v-on:click="addTask = true"
      >Add task +</b-button
    >
    <b-form @submit="onSubmit" class="task-form" v-if="addTask">
      <b-form-group id="input-group-1" label="Task name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          placeholder="Enter task name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Task description:"
        label-for="input-1"
      >
        <b-form-textarea
          id="input-2"
          placeholder="Enter description.."
          v-model="description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button
        v-if="addTask"
        v-on:click="
          $emit('add-todo', name, description), (this.addTask = false)
        "
        type="submit"
        variant="primary"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const TaskForm = Vue.component("task-form", {
  data() {
    return {
      addTask: false as boolean,
      name: "" as string,
      description: "" as string
    };
  },
  methods: {
    onSubmit() {
      this.addTask = false;
      this.name = "";
      this.description = "";
    }
  }
});

export default TaskForm;
</script>

<style>
.form-container {
  width: 50%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.add-task-btn {
  width: 50%;
  justify-self: end;
  grid-column-start: 2;
}

.task-form {
  border: 2px solid black;
  grid-column-start: 2;
  padding: 25px;
  border-radius: 30px;
  text-align: left;
}
</style>
