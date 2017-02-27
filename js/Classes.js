// Classes.js

class Item{
	constructor(name="", encumbrance=0, hardPoints=0, price=0, rarity=1){
		this.name = name;
		this.encumbrance = encumbrance;
		this.hardPoints = hardPoints;
		this.price = price;
		this.rarity = rarity;
		this.id = 0;
	}
}

class Weapon extends Item{
	constructor(obj = {
		skill: "agility",
		damage: 0,
		crit: 0,
		range: 0,
		special: 0
	}){
		super(obj.name, obj.encumbrance, obj.hardPoints, obj.price, obj.rarity);
		this.skill = obj.skill;
		this.damage = obj.damage;
		this.crit = obj.crit;
		this.range = obj.range;
		this.special = obj.special;

	}
}