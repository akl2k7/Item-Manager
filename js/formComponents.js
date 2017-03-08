// Form components, for drastically reducing the amount of HTML I have to write.
// No, seriously, it was getting pretty tedious
Vue.component('input-text', {
	props:["label", "value"],
	data(){
		return {
			localValue: this.value
		}
	},
	template: `<div class="form-group">
		<label>{{label}}</label>
		<input type='text' v-model="localValue" class="form-control"/>
	</div>`,
});

Vue.component('input-number', {
	template: `<div class="form-group">
		<label>{{label}}</label>
		<input type="number" v-model="value" class="form-control"/>
	</div>`,
	props: ["label", "value"]
});

Vue.component("input-textarea", {
	template: `<div class="form-group">
		<label>{{label}}</label>
		<textarea v-model="value" class="form-control"></textarea>
	</div>`,
	props: ["label", "value"]
});

Vue.component("input-password", {
	props: ["label", "value"],
	data(){
		return {
			_value: this.value
		}
	},
	template: `<div class="form-group">
		<label>{{label}}</label>
		<input type="password" v-model="value" class="form-control"/>
	</div>`,
});