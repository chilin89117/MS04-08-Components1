<template>
  <!-- Show a list of servers defined in data() -->
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(server, index) in servers" :key="server">
        Server No. {{server.id}}: {{server.status}}
        <button @click="checkServer(index)">Check Server</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  data() {
    return {
      servers: [
        {id: 1, status: 'Normal',},
        {id: 2, status: 'Foo',},
        {id: 3, status: 'Unknown',},
        {id: 4, status: 'Foobar',},
      ],
    };
  },
  methods: {
    // Clicking "Check Server" button fires event with one server as argument
    checkServer(index) {
      eventBus.$emit('check', this.servers[index]);
    },
  },
};
</script>
