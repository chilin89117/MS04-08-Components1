<template>
  <div class="component">
    <h3>"UserDetail" (child 1)</h3>
    <p>Many Details</p>
    <p>User Name: {{reverseName()}}</p>
    <p>User Age: {{myage}}</p>
    <br>
    <!-- Reset name with custom event -->
    <button type="button" @click="resetName">Reset (Custom Event)</button>
    <!-- Reset name with callback function -->
    <button type="button" @click="resetFn()">Reset (Callback Function)</button>
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
    eventBus.$on('ageWasEditedB', (age) => {      // Listen for event on event bus
      this.myage = age;
    });
  },
};
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
