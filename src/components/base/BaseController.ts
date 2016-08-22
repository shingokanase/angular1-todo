"use strict";

/**
 *
 */
export class BaseController {

  constructor(
    protected $scope
  ) {
    $scope.$on('refresh', () => {this.refresh()});
  }

  protected refresh() {
  }

}

angular.module('app').controller('BaseController', ['$scope', BaseController]);