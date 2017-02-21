// Weapon components
Vue.component("add-weapon", {
	template: `<div>
		<div class="form-group">
			<label>Name</label>
			<input class="form-control" type="text" v-model="name"/>
		</div>

		<div class="form-group">
			<label>Skill</label>
			<input class="form-control" type="text" v-model="skill"/>
		</div>

		<div class="form-group">
			<label>Damage</label>
			<input class="form-control" type="number" v-model="damage"/>
		</div>

		<div class="form-group">
			<label>Critical</label>
			<input class="form-control" type="number" v-model="crit"/>
		</div>

		<div class="form-group">
			<label>Range</label>
			<input type="text" class="form-control" v-model="range"/>
		</div>

		<div class="form-group">
			<label>Encumbrance</label>
			<input type="number" class="form-control" v-model="encumbrance"/>
		</div>

		<div class="form-group">
			<label>Hard Points</label>
			<input type="number" class="form-control" v-model="hardPoints"/>
		</div>

		<div class="form-control">
			<label>Price</label>
			<input type="number" class="form-control" v-model="price"/>
		</div>

		<div class="form-control">
			<label>Rarity</label>
			<input type="number" class="form-control" v-model="rarity"/>
		</div>
		<button class="btn btn-primary">Add Weapon</button>
	</div>`,
	data: function(){
		return {
			name: "",
			skill: "",
			damage: 0,
			crit: 0,
			range: "short",
			encumbrance: 0,
			hardPoints: 0,
			price: 0,
			rarity: 1,
			special: []
		};
	}
});