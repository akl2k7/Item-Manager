// Weapon components
Vue.component("add-weapon", {
	template: `<div>
		<h2>Add Weapon</h2>
		<div class="row">
			<div class="form-group col-sm-6 col-sm-3">
				<label>Name</label>
				<input class="form-control" type="text" v-model="name"/>
			</div>

			<div class="form-group col-sm-6 col-sm-3">
				<label>Skill</label>
				<input class="form-control" type="text" v-model="skill"/>
			</div>

			<div class="form-group col-sm-6 col-sm-3">
				<label>Damage</label>
				<input class="form-control" type="number" v-model="damage"/>
			</div>

			<div class="form-group col-sm-6 col-sm-3">
				<label>Critical</label>
				<input class="form-control" type="number" v-model="crit"/>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-sm-6 col-sm-3">
				<label>Range</label>
				<input type="text" class="form-control" v-model="range"/>
			</div>

			<div class="form-group col-sm-6 col-sm-3">
				<label>Encumbrance</label>
				<input type="number" class="form-control" v-model="encumbrance"/>
			</div>

			<div class="form-group col-sm-6 col-sm-3">
				<label>Hard Points</label>
				<input type="number" class="form-control" v-model="hardPoints"/>
			</div>

			<div class="form-group col-sm-6 col-sm-3">
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
				<button class="btn btn-primary" @click="addWeapon">Add Weapon</button>
			</div>
		</div>
		
	</div>`,
	data: function(){
		return {
			name: "",
			skill: "",
			damage: 0,
			crit: 0,
			range: "Short",
			encumbrance: 0,
			hardPoints: 0,
			price: 0,
			rarity: 1,
			special: []
		};
	}, 
	methods: {
		addWeapon(){
			let weapons = this.$root.weapons;
			weapons.push(new Weapon({
				name: this.name,
				skill: this.skill,
				damage: this.damage,
				crit: this.crit,
				range: this.range,
				encumbrance: this.encumbrance,
				hardPoints: this.hardPoints,
				price: this.price,
				rarity: this.rarity,
				special: this.special
			}));
			this.$root.saveData();
		}
	}
});

Vue.component("view-weapons", {
	template: `<div>
		<h2>View Weapons</h2>
		<ul class="list-group">
			<li class="list-group-item hidden-xs">
				<div class="row">
					<div class="col-sm-2">
						Name
					</div>
					<div class="col-sm-1 col-md-2">
						Skill
					</div>
					<div class="col-sm-1">
						Damage
					</div>
					<div class="col-sm-1">
						Crit
					</div>
					<div class="col-sm-1">
						Range
					</div>
					<div class="col-sm-2 col-md-1">
						Encumbrance
					</div>
					<div class="col-sm-2">
						Hard Points
					</div>
					<div class="col-sm-1">
						Price
					</div>
					<div class="col-sm-1">
						Rarity
					</div>
				</div>
			</li>
			<li v-for="weapon in weapons" class="list-group-item">
				<div class="row" v-on:click="viewSingleWeapon(weapon.id)">
					<div class="col-sm-2">
						{{weapon.name}}
					</div>
					<div class="col-sm-1 col-md-2 hidden-xs">
						{{weapon.skill}}
					</div>
					<div class="col-sm-1 hidden-xs">
						{{weapon.damage}}
					</div>
					<div class="col-sm-1 hidden-xs">
						{{weapon.crit}}
					</div>
					<div class="col-sm-1 hidden-xs">
						{{weapon.range}}
					</div>
					<div class="col-sm-2 col-md-1 hidden-xs">
						{{weapon.encumbrance}}
					</div>
					<div class="col-sm-2 hidden-xs">
						{{weapon.hardPoints}}
					</div>
					<div class="col-sm-1 hidden-xs">
						{{weapon.price}}
					</div>
					<div class="col-sm-1 hidden-xs">
						{{weapon.rarity}}
					</div>
				</div>
			</li>
		</ul>
	</div>`,
	props: ["weapons"],
	methods: {
		viewSingleWeapon(id){
			this.$root.currentWeapon = this.weapons[id];
			this.$root.currentView = "view-weapon";
		}
	}
});

Vue.component("view-weapon", {
	template: `<div>
		<h2>{{weapon.name}}</h2>
		<!-- Buttons -->
		<button class="btn btn-primary" @click="goBack">Back</button>
		<button class="btn btn-default" @click="editWeapon">Edit</button>
		<button class="btn btn-danger" @click="deleteWeapon">Delete</button>

		<!-- Info on the weapon -->
		<p><strong>Skill: </strong>{{weapon.skill}}</p>
		<p><strong>Damage: </strong>{{weapon.damage}}</p>
		<p><strong>Crit: </strong>{{weapon.crit}}</p>
		<p><strong>Range: </strong>{{weapon.range}}</p>
		<p><strong>Encumbrance: </strong>{{weapon.encumbrance}}</p>
		<p><strong>Hard Points: </strong>{{weapon.hardPoints}}</p>
		<p><strong>Price: </strong>{{weapon.price}}</p>
		<p><strong>Rarity: </strong>{{weapon.rarity}}</p>
	</div>`,
	props: ["weapon"],
	methods: {
		goBack(){
			this.$root.currentView = "view-weapons";
		},
		editWeapon(){
			this.$root.currentView = "edit-weapon";
		},
		deleteWeapon(){
			this.goBack();

			let weapons = this.$root.weapons;
			weapons.splice(this.weapon.id, 1);
			this.$root.setIds(weapons);
			this.$root.saveData();

		}
	}
});