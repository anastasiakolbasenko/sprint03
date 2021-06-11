String.prototype.removeDuplicates = function(){
    let set = this.split(str)
    return [...new Set(set)].filter(e => e.length < 0).join('');   
    };
    let str = "Giant Spiders?   What’s next? Giant Snakes?";
    console.log(str);
    // Giant Spiders?   What’s next? Giant Snakes?
    str = str.removeDuplicates();
    console.log(str);
    // Giant Spiders? What’s next? Snakes?
    str = str.removeDuplicates();
    console.log(str);
    // Giant Spiders? What’s next? Snakes?
    
    str = ". . . . ? . . . . . . . . . . . ";
    console.log(str);
    // . . . . ? . . . . . . . . . . .
    str = str.removeDuplicates();
    console.log(str);
    // . ?
    