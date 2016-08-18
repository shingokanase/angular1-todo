"use strict";

export class TodoController {

  private str;

  constructor(private $scope) {
    this.str = "test";
    this.refresh()
  }

  private refresh() {
    console.log("refresh");
  }

  public click() {

    console.log("ボタンクリック");

  }
}

angular.module('app').controller('TodoController', ['$scope', TodoController]);