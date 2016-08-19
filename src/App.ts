/// <reference path="../typings/index.d.ts" />
"use strict";

angular.module('app', ['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", ($stateProvider, $urlRouterProvider, $locationProvider) => {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('todo', {
      abstract: true,
      url: 'todo',
      // views: 'topView'
      template: 'test'
    });

}]);