'use strict'
class Building {
    hasElevator;
    arcCapacity;
    height;
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return `
            Floors: ${this.floors}
            Material: ${this.material}
            Address: ${this.address}
            Elevator: ${this.hasElevator ? "+": "-"}
            Arc reactor capacity: ${this.address}
            Height: ${this.height}
            Floor height: ${this.getFloor()}`

    }
    getFloor(){ return this.height / this.floors}
}


class Tower extends Building {
    constructor(floors, material, address){
    super(floors, material, address);
}}






const starkTower = new Tower(93, 'Different', 'Manhattan, NY'); 
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString())



// Floors: 93
// Material: Different
// Address: Manhattan, NY
// Elevator: +
// Arc reactor capacity: 70
// Height: 1130
// Floor height: 12.150537634408602