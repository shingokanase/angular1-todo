/// <reference path="../typings/index.d.ts" />
"use strict";

angular.module('app', ['ui.router']).config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('todo', {
      abstract: true,
      url: 'todo',
      // views: 'topView'
      templateUrl: './components/top/top.html'
    });

});