(function(){
  var app = angular.module('liveForm', []);
  var stars = [5, 4, 3, 2, 1];
  var products = [
    { name: "red car",
      reviews: [
      {
        stars: 4,
        description: "It's red!",
        firstName: "Charles",
        lastName: "Arcin"
    }]},
    { name: "green car",
      reviews: [
      {
        stars: 2,
        description: "It's okay...",
        firstName: "Guy",
        lastName: "Noon"
      },
      {
        stars: 4,
        description: "I really like it",
        firstName: "Lady",
        lastName: "Dusk"
      }]},
    { name: "white motorcycle",
      reviews: [
      {
        stars: 3,
        description: "It's white",
        firstName: "Person",
        lastName: "Normal"
      }]}
  ];
  app.controller('ProductController', function(){
    this.products = products;
  });
  app.controller('ReviewController', function(){
    this.stars = stars;
  });
})();