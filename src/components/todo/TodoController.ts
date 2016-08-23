"use strict";

import {BaseController} from '../base/BaseController.ts';

/**
 * Todoコントローラー
 */
export class TodoController extends BaseController {

  private message: string;
  private id: number = 0;
  private todoItems;

  constructor(
    protected $scope,
    private cacheSheredService,
    private messageSharedService
  ) {
    super($scope);
    this.refresh();
  }

  /**
   * リフレッシュ
   */
  protected refresh(): void {
    console.log("refresh2");
    this.todoItems = this.cacheSheredService.todoItems;
    console.dir(this.todoItems);
  }

  /**
   * Todoを追加する
   */
  private addItem(): void {

    if (angular.isUndefined(this.message)) {
      // 未入力
      return;
    }

    this.todoItems.push({
      "message": this.message,
      "id"     : this.id,
      "done"   : false
    });

    this.id++;

    // リフレッシュを通知
    this.sendMessage('all');

  }

  /**
   * Todoを削除する
   */
  private deleteItem(index: number): void {

    for (const item of this.todoItems) {

      if (item.id == this.todoItems[index].id) {
        this.todoItems.splice(index, 1);
        break;
      }

    }

    // リフレッシュを通知
    this.sendMessage('all');

  }

    /**
   * Todoを完了する
   */
  private doneItem(index: number): void {

    for (const item of this.todoItems) {

      if (item.id == this.todoItems[index].id) {
        this.todoItems[index].done = true;
        break;
      }

    }

    // リフレッシュを通知
    this.sendMessage('all');

  }

  /**
   * 変更
   */
   private change(value: string = "0"):void {

     switch (value) {
       case "1":

         break;
       case "2":

         break;
       default:
         break;
     }

   }

  /**
   * メッセージを送る
   */
   private sendMessage(message: string): void {
    this.messageSharedService.send(message);
   }
}

angular.module('app').controller('TodoController', ['$scope', 'CacheSharedService', 'MessageSharedService', TodoController]);