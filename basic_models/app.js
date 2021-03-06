(function(){
  // created to test ng-submit() without jquery;
  window.onload = function(){
    var forms = document.getElementsByTagName('form');
    var prevention = function(e){
      e.preventDefault();
    };
    for (var i = 0; i < forms.length; i++){
      forms[i].addEventListener("submit", prevention);
    }
  };

  // Angular code
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
    this.review = {};
    this.stars = stars;
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();