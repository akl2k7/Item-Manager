// App.js

var vm = new Vue({
	el: "#app",
	data: {
		// Data for items used
		weapons: [],
		armor:[],
		gear: [],
		attachments: [],

		// Local Storage data
		lsData: {},

		// Method for handling the view
		currentView: "view-weapons",
		currentWeapon: new Weapon()
	},
	created(){
		this.loadData();
	},
	methods: {
		loadData(){
			let data = localStorage.getItem("swItems");
			if(data){
				this.lsData = JSON.parse(data);
				this.weapons = this.lsData.weapons;
				this.armor = this.lsData.armor;
				this.gear = this.lsData.gear;
				this.attachments = this.lsData.attachments;

				// Set ids for all of these arrays
				this.setIds(this.weapons);

				// Initial values for currentWeapon, etc.
				this.currentWeapon = this.weapons[0];
			}
			else
				this.lsData = {
					weapons: [],
					armor: [],
					gear: [],
					attachments: []
				}
		},
		saveData(){
			// Save data from strings to lsData
			this.lsData.weapons = this.weapons;
			this.lsData.armor = this.armor;
			this.lsData.gear = this.gear;
			this.lsData.attachments = this.attachments;

			// Save lsData to localStorage
			let dataString = JSON.stringify(this.lsData);
			localStorage.setItem("swItems", dataString);
		},
		changeView(newView){
			this.currentView = newView;
		},
		setIds(arr){
			for(let i = 0; i < arr.length; i++)
				arr[i].id = i;
		}
	}
});