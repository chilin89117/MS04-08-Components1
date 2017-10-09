<template>
  <div class="component">
    <h3>"UserEdit" (child 2)</h3>
    <p>Edit me!</p>
    <p>User Name: {{myname}}</p>
    <p>User Age: {{myage}}</p>
    <button @click="editAgeCustom">Edit Age (Custom Event)</button>
    <button @click="editAgeBus">Edit Age (Event Bus)</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  props: {
    myname: String,
    myage: Number,
  },
  methods: {
    editAgeCustom() {
      this.myage = 30;
      this.$emit('ageWasEditedC', this.myage);   // Custom event to notify parent 'myage' was edited
    },
    editAgeBus() {
      this.myage = 31;
      // eventBus.$emit('ageWasEditedB',this.myage);  // Use event bus to emit custom event w/o going through parent
      eventBus.changeAge(this.myage);            // Use function defined in event bus
    },
  },
};
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
