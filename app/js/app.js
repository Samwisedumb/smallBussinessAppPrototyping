'use strict';

/* App Module */

var app = angular.module('jobDatabaseApp', [
  'ngRoute',
  'DatabaseControllers',
  'DatabaseServices'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/jobsDB', {
        templateUrl: 'partials/jobs-database.html',
        controller: 'JobDatabaseCtrl'
      }).
      when('/oppsDB', {
       templateUrl: 'partials/opps-database.html',
       controller: 'OppDatabaseCtrl'
      }).
      when('/', {
        templateUrl: "partials/start.html"
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
