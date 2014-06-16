(function(){
  var app = angular.module('basicApp', []);
  var info = {
    english: "Hello, AngularJS!",
    spanish: "Hola, AngularJS!"
  };
  var people = [
  {developer: true, name: 'charles', age: 21},
  {developer: false, name: 'sean', age: 20},
  {developer: true, name: 'juan', age: 33}
  ];

  app.controller('BasicController', function(){
    this.language = info;
  });

  app.controller('PeopleController', function(){
    this.people = people;
  });

})();

