(function(){
  var app = angular.module('liveForm', []);
  var stars = [5, 4, 3, 2, 1];
  app.controller('ReviewController', function(){
    this.stars = stars;
  });
})();