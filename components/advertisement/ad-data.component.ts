import { Component, Input, OnInit } from '@angular/core';
import { AdItem } from './types';

@Component({
  templateUrl: './ad-data.component.html',
  styleUrls: ['./ad-content.component.scss'],
})
export class AdDataComponent implements OnInit {
  @Input() data!: AdItem;

  ngOnInit(): void {
    console.log(this.data, '9999');
  }
}
