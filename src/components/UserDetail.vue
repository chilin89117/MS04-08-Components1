<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      user_name: {                     // Validation of data passed
        type: String,
        required: true,
        // default: 'Default string',
      },
    },
    methods: {
      switchName() {
        return this.user_name.split("").reverse().join("");
      },
    },
  };
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
