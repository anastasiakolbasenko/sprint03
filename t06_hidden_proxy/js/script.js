let validator = {
    get(target, property)  {    // когда запрашивааем(выводим)
      if (property in target){
        console.log(`Trying to access the property '${property}'...`)
        return target[property]
      } return false
    },
    set(target, property, value){   //когда записываем(задаем значение) 
      console.log(`Setting value '${value}' to '${property}'`);
      target[property] = value;
      if (property === "age" ){
        if (!Number.isInteger(value)){
          throw new Error(`Uncaught TypeError: The '${property}' is not an integer`); 
        } else if (value > 200 || value <= 0){
          throw new Error(`Uncaught RangeError: The '${property}' is invalid`); 
        }
      }
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  let person = new Proxy({}, validator );
  
  person.age = 100;
  // Setting value'100' to 'age'
  
  console.log(person.age);
  // Trying to access the property'age'...
  // 100
  
  person.gender= "male";
  // Setting value 'male' to 'gender'
  
  person.age = 'young';
  // Uncaught TypeError: The age is not an integer
  
  person.age = 300;
  // Uncaught RangeError: The age is invalid
  
  console.log(person.age);