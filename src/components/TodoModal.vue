<template>
  <div>
    <b-button @click="$bvModal.show('new-task')">New task +</b-button>

    <b-modal id="new-task" hide-footer>
      <template #modal-title> Add a new task </template>
      <div class="d-block text-center">
        <h3>HI NEW TASK</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Close Me</b-button
      >
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class TodoModal extends Vue {}
</script>

<style></style>
