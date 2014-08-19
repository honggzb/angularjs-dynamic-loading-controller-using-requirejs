'use strict';
define(['angular','app/myApp'],function(_,myApp){
  myApp.register.controller('myController',['$scope',function($scope){
    $scope.foo = 'hello,world';
  }]);
});