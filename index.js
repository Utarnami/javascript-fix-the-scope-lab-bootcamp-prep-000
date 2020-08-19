var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}
function yourAnimal() {
  var animal = "cat";
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  return animal
 
}

function add2(n) {
   const two = 2
  return n + two
<<<<<<< HEAD
// Feel free to move things around!\
  }
=======
  // Feel free to move things around!\
}
>>>>>>> 5613bc836f4ba86c8f2bf0f4b3c9cda083662e73

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()
theFunk()
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"

