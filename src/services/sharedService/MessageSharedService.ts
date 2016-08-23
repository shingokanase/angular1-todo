"use strict";

/**
 *
 */
export class MessageSharedService {

  constructor(
    private $rootScope
  ) {

  }

  /**
   *
   */
  public send(message: string): void {

    switch (message) {
      case 'all':
          console.log(`message: ${message}`);
          this.$rootScope.$broadcast('refresh');
        break;
      default:
        break;
    }

  }


}

angular.module('app').service('MessageSharedService', ['$rootScope', MessageSharedService]);