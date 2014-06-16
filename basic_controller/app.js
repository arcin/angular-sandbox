(function(){
  var app = angular.module('basicApp', []);
  var info = {
    english: "Hello, AngularJS!",
    spanish: "Hola, AngularJS!"
  };
  var people = [
  {name: 'charles', age: 21},
  {name: 'sean', age: 20},
  {name: 'juan', age: 33}
  ];

  app.controller('BasicController', function(){
    this.language = info;
  });

  app.controller('PeopleController', function(){
    this.people = people;
  });

})();

