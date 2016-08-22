"use strict";

/**
 *
 */
export class MessageSharedService {

  constructor(
    private $rootScope
  ) {

  }

  public send() {
    console.log('message');
    this.$rootScope.$broadcast('refresh');
  }


}

angular.module('app').service('MessageSharedService', ['$rootScope', MessageSharedService]);