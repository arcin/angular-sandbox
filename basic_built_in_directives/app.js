(function(){
  var app = angular.module('toyStore', []);
  var toys = [
  { name: "pogo stick",
    price: 20.05,
    images: [
      "http://www.pogostickusa.com/imgaes_pogo.html/Junior%20Stinger%20Light%20Up%20Pogo%20Stick-RED.jpg",
      "http://blog.iqsdirectory.com/wp-content/uploads/files/springs%207.jpg"
    ]},
  { name: "car",
    price: 45.75,
    images: [
      "http://site.electric-scooters-galore.com/images/wheelsforkids/enzo.jpg",
      "http://eternalhobbyist.com/wp-content/uploads/2012/07/children_ride_on_car_toy_cars_kids_car_electronic__1257236924.jpg"
    ]},
  { name: "dragon",
    price: 10,
    images: [
      "http://anwo.com/store/media/blue-ice-dragon-toy-miniature.jpg",
      "http://guidestobuy.com/images/actionfigure/upload//images/I/5146MSF5N9L.jpg"
    ]}
  ];
  app.controller('StoreController', function(){
    this.toys = toys;
  });

  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(val){
      this.tab = val;
    };
    this.isSet = function(val){
      return this.tab === val;
    };
  });
})();