// Weapon components
Vue.component("add-weapon", {
	template: `<div>
		<h2>Add Weapon</h2>
		<div class="row">
			<div class="form-group col-sm-6 col-md-3">
				<label>Name</label>
				<input class="form-control" type="text" v-model="name"/>
			</div>

			<div class="form-group col-sm-6 col-md-3">
				<label>Skill</label>
				<input class="form-control" type="text" v-model="skill"/>
			</div>

			<div class="form-group col-sm-6 col-md-3">
				<label>Damage</label>
				<input class="form-control" type="number" v-model="damage"/>
			</div>

			<div class="form-group col-sm-6 col-md-3">
				<label>Critical</label>
				<input class="form-control" type="number" v-model="crit"/>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-sm-6 col-md-3">
				<label>Range</label>
				<input type="text" class="form-control" v-model="range"/>
			</div>

			<div class="form-group col-sm-6 col-md-3">
				<label>Encumbrance</label>
				<input type="number" class="form-control" v-model="encumbrance"/>
			</div>

			<div class="form-group col-sm-6 col-md-3">
				<label>Hard Points</label>
				<input type="number" class="form-control" v-model="hardPoints"/>
			</div>

			<div class="form-group col-sm-6 col-md-3">
				<label>Price</label>
				<input type="number" class="form-control" v-model="price"/>
			</div>
		</div>
		<div class="row">
			<div class="form-group col-sm-4">
				<label>Rarity</label>
				<input type="number" class="form-control" v-model="rarity"/>
			</div>
			<div class="col-sm-4">
				<button class="btn btn-primary">Add Weapon</button>
			</div>
		</div>
		
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