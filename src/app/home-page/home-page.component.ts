import { Component, OnInit } from '@angular/core';
import { Friend } from './types';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  username: string = 'chengyouthree';
  isActive: boolean = false;

  friendList: Friend[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.friendList = [
      { id: 'aaa', name: 'jack' },
      { id: 'bbb', name: 'milla' },
      { id: 'ccc', name: 'stanlee' },
    ]
  }

  call(friend: Friend): void {
    alert(`calling ${friend.name || ''}......`)
  }
  toggleActive(): void {
    this.isActive = !this.isActive
  }
}
