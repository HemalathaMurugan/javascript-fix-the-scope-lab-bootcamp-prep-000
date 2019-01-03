var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal='cat'
  return animal
}
myAnimal()
yourAnimal()

function add2(n) {
  const two = 2
  return n + two
  // Feel free to move things around!
  
}

var funkyFunction = function() {
<<<<<<< HEAD
    
    return function() {
    
    return "FUNKY!"
    
  }
  }
var theFunk = funkyFunction()()

=======
    var theFunk = funkyFunction
}
    return function() {
      return "FUNKY!"
  }
  
>>>>>>> 86c7586b1d8ff0c1acf1d6e3e7090f93d4015818

  
 // var theFunk = funkyFunction
  
  
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.


