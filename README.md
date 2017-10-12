# MS04-04 Components Communication (No Laravel)
## `App.vue`
* Calls component `User.vue`

### `User.vue`
* Parent of 2 child components
	* `UserDetail.vue`
	* `UserEdit.vue` 
* Has 2 buttons to change and reset its `name` property

### `UserDetail.vue`
* Has 2 buttons to reset the `name` property in the parent using
	* custom event, i.e. `this.$emit('nameWasReset', this.myname);`
	* callback function `resetFn()` passed down from the parent
* Also listens for an event on the eventbus to change `age`

### `UserEdit.vue`
* Has 2 buttons to change the `age` property
	* custom event changes the property in the parent which then affects the sibling component
	* use eventbus in `main.js` to change `age` in the sibling without going through the parent

### `main.js`
* Creates a new instance, an eventbus, with a method that emits an event to change `age` 

#### End of Section 8, lecture 116.

