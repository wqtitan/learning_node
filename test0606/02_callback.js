function callFunction(fun) {
  fun();
}

// const sayBye = 

module.exports = {
  sayBye: function() {
    console.log('Bye');
  },
  callFunction: callFunction,
}