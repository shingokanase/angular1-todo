"use strict";

import {BaseController} from '../base/BaseController.ts';

/**
 *
 */
export class TodoController extends BaseController {

  private item;
  private todoItems;

  constructor(
    protected $scope,
    private cacheSheredService,
    private messageSharedService
  ) {
    super($scope);
    this.refresh();
  }

  protected refresh() {
    console.log("refresh2");
    this.todoItems = this.cacheSheredService.todoItems;
  }

  public addItem() {

    if (angular.isUndefined(this.item)) {
      return;
    }
    console.log(this.item);
    this.cacheSheredService.todoItems.push(this.item);
    console.dir(this.cacheSheredService.todoItems);

    this.messageSharedService.send();

  }
}

angular.module('app').controller('TodoController', ['$scope', 'CacheSharedService', 'MessageSharedService', TodoController]);