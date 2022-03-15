//JavaScript Objects
//Create a person object 
//Assign Properties 
//Assign function to properties 
//Invoke the Object
const person = {
    name: ['Jinesh' , 'Kumar'], 
    age: 40, 
    bio: function() {
        console.log("Bio Invoked") 
                    },
    introFunction: function () {
        console.log("introfunction invoked")
                    } 
  };

console.log(person.bio());