# MS04-08-Components1
## Communication Between Components

![App.vue](../assets/a.png?raw=true)
![Exercise7.vue](../assets/b.png?raw=true)


**Note: edit `main.js` to switch between `App.vue` and `Exercise7.vue`**
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
* Creates a new instance
* Creates an eventbus with a method that can be called to change `age` by emitting an event

#### End of Section 8, lecture 116.

## `Exercise7.vue`
* Parent of 2 child components
	* `Servers.vue`
	* `Server.vue`

### `Servers.vue`
* Shows a list of servers and statuses
* Each server has a button that uses the eventbus in `main.js` to pass a single server to `Server.vue`

### `Server.vue`
* Shows id and status of one server from an eventbus event
* Has a button that changes the status to 'Normal`
