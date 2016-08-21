"use strict";

/**
 *
 */
export class TodoController {

  private item;
  private todoItems;

  constructor(
    private $scope,
    private cacheSheredService
  ) {
    this.refresh()
  }

  private refresh() {
    console.log("refresh");
    this.todoItems = this.cacheSheredService.todoItems;
  }

  public addItem() {

    console.log(this.item);

    this.todoItems.push(this.item);
    console.log("ボタンクリック");

  }
}

angular.module('app').controller('TodoController', ['$scope', 'CacheSharedService', TodoController]);