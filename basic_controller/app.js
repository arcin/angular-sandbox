(function(){
  var app = angular.module('basicApp', []);
  var info = {
    english: "Hello, AngularJS!",
    spanish: "Hola, AngularJS!"
  };

  app.controller('BasicController', function(){
    this.language = info;
  });

})();

