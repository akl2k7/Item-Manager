// Components for dealing with the server
Vue.component("sign-up-form", {
	template: `<div>
		<h2>Sign In</h2>
		<input-text label="Username" name="username" :value="username"></input-text>
		<input-password label="Password" name="password" :value="password"></input-password>
		<input-password label="Repeat Password" :value="repeatedPass"></input-password>
		<button class="btn btn-primary">Submit</button>
	</div>`,
	data(){
		return {
			username: "",
			password: "",
			repeatedPass: ""
		};
	}
});

Vue.component("login-form", {
	template: ``
});