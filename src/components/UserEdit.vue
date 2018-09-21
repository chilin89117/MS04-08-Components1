<template>
  <div class="component">
    <h2>"UserEdit" (child 2)</h2>
    <h4>User Name: {{myname}}</h4>
    <h4>User Age: {{myage}}</h4>
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
