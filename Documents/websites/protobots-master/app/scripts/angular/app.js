'use strict';

angular.module('ngProtobotsApp', [])
  .config(function ($locationProvider, $routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html'
      }).
      when('/:name', {
        templateUrl: function($routeParams) {
               return 'views/' + $routeParams.name + '.html';
             },
      }).
      otherwise({
        redirectTo: '/'
      });
  });



