(function(){
  var app = angular.module('liveForm', []);
  var ratings = [5, 4, 3, 2, 1];
  app.controller('ReviewController', function(){
    this.ratings = ratings;
  });
})();