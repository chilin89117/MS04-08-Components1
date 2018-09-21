<template>
  <div class="component">
    <h1>"User" Component (parent)</h1>
    <button @click="changeName">Change Name</button>
    <button @click="age=27">Reset Age</button>
    <br>
    <h3>Current name is: {{name}}</h3>
    <h3>Current age is: {{age}}</h3>
    <hr
    >
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myname="name"
                         :myage="age"
                         @nameWasReset="name=$event"
                         :resetFn="resetName">
        </app-user-detail>
      </div>

      <div class="col-xs-12 col-sm-6">
        <app-user-edit :myname="name"
                       :myage="age"
                       @ageWasEditedC="age=$event">
        </app-user-edit>
      </div>
      </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data() {
      return {
        name: 'Abbie',
        age: 27,
      };
    },
    methods: {
      changeName() {    // Change name in child component & listen for custom event
        this.name = 'Tiffany';
      },
      resetName() {     // Callback function for child component to reset name w/o custom event
        this.name = 'Abbie';
      },
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit,
    },
  };
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
