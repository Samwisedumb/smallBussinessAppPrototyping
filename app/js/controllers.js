'use strict';

var module = angular.module("DatabaseControllers", []);

module.controller("JobDatabaseCtrl", ["$scope", "JobsDB",
  function ($scope, jobsDB) {
    $scope.scheme = jobsDB.scheme();
    $scope.jobs = jobsDB.list();
    $scope.numJobs = undefined; //undefined for 'limitTo' results in all items
  }]);

module.controller("OppDatabaseCtrl", ["$scope", "OppsDB",
  function ($scope, oppsDB) {
    $scope.scheme = oppsDB.scheme();
    $scope.opps = oppsDB.list();
    $scope.numOpps = undefined; //undefined for 'limitTo' results in all items
  }]);
