const Character = require('./Character');
const Potion = require('../lib/Potion');

class Player extends Character{
    constructor(name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }
    // inherit prototype methods from Character
    

    // returns an object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }


    // adds a potion to players inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // removes potion from inventory and increases a stat
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    };
}

module.exports = Player;