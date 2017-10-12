<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Exercise 7: Server Status</h1>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <my-servers></my-servers>
      </div>
      <div class="col-xs-12 col-sm-6">
        <my-server></my-server>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="col-xs-12">
        <h3>All Servers are managed here!</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import Server from './Server.vue'
  import Servers from './Servers.vue'

  export default {
    components: {
      'my-server': Server,
      'my-servers': Servers,
    },
  };
</script>
