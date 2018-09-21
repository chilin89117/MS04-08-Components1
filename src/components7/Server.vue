<template>
  <div>
    <div v-if="server!=null && server.status!='Normal'">
      <h3>Status for Server ID: {{server.id}} is "{{server.status}}"</h3>
      <button @click="changeStatus(server)">Change Status</button>
    </div>
    <div v-else>
      <h3>Select a server with status not 'Normal'.</h3>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  props: {
    server: Object,
    index: Number,
  },
  methods: {
    changeStatus() {                  // Object passed by reference,
      this.server.status = 'Normal';  // no need to trigger event to update status
    },
  },
  created() {
    eventBus.$on('check', (server) => {
      this.server = server;
    });
  },
};
</script>
