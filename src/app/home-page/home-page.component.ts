import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Friend } from './types';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent
  implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  username: string = 'chengyouthree';
  isActive: boolean = false;
  friendList: Friend[] = [];

  constructor() {
    console.log();
  }

  // // angular组件生命周期
  ngOnChanges(): void {
    console.log('ngOnChanges.........');
  }
  ngOnInit(): void {
    console.log('ngOnInit...');
    this.friendList = [
      { id: 'aaa', name: 'jack' },
      { id: 'bbb', name: 'milla' },
      { id: 'ccc', name: 'stanlee' },
    ];
  }
  ngDoCheck(): void {
    console.log('ngDoCheck...');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit...');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked...');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit...');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked...');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy...');
  }

  call(friend: Friend): void {
    alert(`calling ${friend.name || ''}......`);
  }
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
