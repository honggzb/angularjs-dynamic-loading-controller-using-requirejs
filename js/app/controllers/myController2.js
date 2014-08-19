'use strict';
define(['angular','app/myApp'],function(_,myApp){
  myApp.register.controller('myController2',['$scope',function($scope){
    $scope.foo = 'Great example!';
  }]);
});