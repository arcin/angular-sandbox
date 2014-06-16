(function(){
  var app = angulage.module('toyStore', []);
  var toys = [
  { name: "pogo stick", price: 20.05 },
  { name: "car", price: 4.75 },
  { name: "dragon", price: 10 }
  ];
  app.controller('StoreController', function(){
    this.toys = toys;
  });
})();