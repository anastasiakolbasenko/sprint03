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
