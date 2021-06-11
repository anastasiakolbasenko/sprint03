'use strict'
function HouseBuilder(address, description, size, owner, roomCount){
    this.address = address;
    this.description = description;
    this.size = size;
    this.owner = owner;
    this._building_speed = 0.5;
    this.date = new Date;  //  метод у обьекта toDateString()
    this.roomCount = roomCount;
    this.prototype = houseBlueprint;
}



let houseBlueprint = {
address:this.address,
description:this.description,
size:this.size,
owner:this.owner,
getDaysToBuild(){
    return this.size/this._building_speed
}
}
















const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith',
110,
5);
console.log(house.address);
// '88 Crescent Avenue'
console.log(house.description);
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'
console.log(house.size);
// 110
console.log(house.date.toDateString());
// [the current date], for example:'Tue Aug 11 2020'
console.log(house.owner);
// J. Smith
console.log(house._building_speed);
// 0.5
// console.log(house.getDaysToBuild());
// 220
console.log(house.roomCount);
// 5