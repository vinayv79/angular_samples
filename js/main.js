var app = angular.module('myApp',[]);

app.controller("MyController", function($scope){
    $scope.sayHello = function(){
      alert('Hello!');  
    };
    
    $scope.roommates = [
      { name: 'Ari'},
      { name: 'Q'},
      { name: 'Sean'},
      { name: 'Anand'}
    ];
    
    $scope.people = {
      'Ari': 'orange',
      'Q': 'purple',
      'Sean': 'green'
    }
});