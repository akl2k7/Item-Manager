// App.js

var vm = new Vue({
	el: "#app",
	data: {
		weapons: [],
		armor:[],
		gear: [],
		attachments: [],
		lsData: {}
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
		}
	}
});