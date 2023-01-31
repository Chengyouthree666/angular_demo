import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'home-sub-component',
  templateUrl: './communite-test.component.html',
  styleUrls: ['./communite-test.component.scss']
})
export class CommuniteTestComponent implements OnChanges {
  //子组件接受父组件属性传值
  @Input() username!: string;
  beforeName: string = ''

  // 子组件向父组件通信：通过EventEmitter(output)
  @Output() call = new EventEmitter<string>();

  // // 监听通信属性
  ngOnChanges(changes: SimpleChanges): void {
    const { username } = changes
    this.beforeName = username.previousValue || username.currentValue
  }

  callFather(msg: string): void {
    this.call.emit(msg)
  }

  /**
   * 借助于@Input 定义get/set来间接实现属性的监听变化处理
   * 例如：
   *    @Input()
   *    get name(): string {
   *      return something...
   *    }
   *    set name(name: string) {
   *      do something...
   *    }
   */
}
