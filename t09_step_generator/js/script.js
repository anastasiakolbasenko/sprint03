function* generator(){
    let index = 1;
   while(true){
    let input = +prompt(`Previous result: ${index}. Enter a new number:`);
        if (isNaN(input) || input <= 0){
        yield console.error("Is not an Integer!");
         
        } else {
            index += input;
            if (index > 10000){
                index = 1;
                yield;
            }
            yield index;
        }
    }
}

let gen = generator();
for (let i = 1; i <= 5; i++) { 
    gen.next();
}