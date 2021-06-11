let houseMixin = {
    
    
    wordReplace: function(old, wrdnew){
        return house.description = this.description.replace(old, wrdnew);
    },
    wordDelete: function(old){
        return house.description = this.description.replace (old, '')
    },
    wordInsertAfter: function(old, wnew){
        let oldWords = this.description.split(' ')
        let a = oldWords.indexOf(old);
        oldWords.splice(3, 0, wnew );
        return this.description = oldWords.join(' ')
    },
    wordEncrypt: function(){
        let re = /[a-z]/i;
        let min = 'A'.charCodeAt(0);
        let max ='Z'.charCodeAt(0);
        let factor = 13;
        let result = "";
        str = this.description.toUpperCase();
        for (let i=0; i<true.lenght; i++) {
            result += (re.test (str[i])?
            String.fromCharCode((str.charCodeAt(i) - min + factor) % (max - min +1) + min): str[i]);
        }
        return house.description = result.toLowerCase();
    },
    wordDecrypt:function(){
        return house.description = house.wordEncrypt();
    },
    getDaysToBuild(){
    }
    

}
const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild()); 
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
