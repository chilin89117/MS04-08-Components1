<template>
  <div class="component">
    <h2>"UserDetail" (child 1)</h2>
    <h4>User Name: {{reverseName()}}</h4>
    <h4>User Age: {{myage}}</h4>
    <br>
    <!-- Reset name with custom event -->
    <button type="button" @click="resetName">Reset Name (Custom Event)</button>
    <!-- Reset name with callback function -->
    <button type="button" @click="resetFn()">Reset Name (Callback Function)</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  props: {
    myname: {               // Validation of data passed from 'User.vue'
      type: String,
      required: true,
      // default: 'Default string',
    },
    myage: Number,
    resetFn: Function,      // Callback function from parent to reset name
  },
  methods: {
    reverseName() {
      return this.myname.split("").reverse().join("");
    },
    resetName() {
      this.myname = 'Abbie';
      this.$emit('nameWasReset', this.myname);    // Trigger event to notify parent 'User.vue'
    },
  },
  created() {
    eventBus.$on('ageWasEditedB', age => this.myage = age);  // Listen for event on event bus
  },
};
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
