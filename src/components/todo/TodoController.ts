"use strict";

export class TodoController {

  private todoItems;

  constructor(private $scope) {
    this.refresh()
  }

  private refresh() {
    console.log("refresh");

    this.todoItems = ['あ', 'い', 'う', 'え', 'お'];
  }

  public click() {

    console.log("ボタンクリック");

  }
}

angular.module('app').controller('TodoController', ['$scope', TodoController]);