(function(){
  var app = angular.module('basicApp', []);

  app.controller('BasicController', function(){
    this.language = info;
  });

  var info = {
    english: "Hello, AngularJS!",
    spanish: "Hola, AngularJS!"
  };
})();

