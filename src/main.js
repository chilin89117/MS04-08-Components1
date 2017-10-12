import Vue from 'vue'
//import App from './App.vue'
import App from './Exercise7.vue'

export const eventBus = new Vue({   // Event bus has to be created before the components
  methods: {
    changeAge(age) {
      this.$emit('ageWasEditedB', age);
    },
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
