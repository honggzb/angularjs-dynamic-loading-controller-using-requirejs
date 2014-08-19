'use strict';
define(['angular','angularRoute','services/routeResolver'],function(){
    var app = angular.module('myApp',['routeResolverServices','ngRoute']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide','$locationProvider',function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $locationProvider){
      routeResolverProvider.routeConfig.setBaseDirectories('js/app/views/','js/app/controllers/');
      app.register =
        {
          controller: $controllerProvider.register,
          directive: $compileProvider.directive,
          filter: $filterProvider.register,
          factory: $provide.factory,
          service: $provide.service
        };

      var route = routeResolverProvider.route;
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/',route.resolve('myController','myView'))
        .when('/foo',route.resolve('myController2','myView'))
        .otherwise({ redirectTo: '/'});
    }])
    .config(['$locationProvider',function($locationProvider){
      $locationProvider.html5Mode(true);
    }]);
    return app;
});