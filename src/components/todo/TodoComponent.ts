"use strict";

/**
 *
 */
export class TodoComponent implements ng.IComponentOptions {

  public controller = "TodoController";
  public controllerAs = "todo";
  public template = require("./TodoTemplate.html");

}

angular.module('app').component('todoComponent', new TodoComponent());