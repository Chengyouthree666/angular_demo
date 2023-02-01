import {
  Component,
  Input,
  ViewChild,
  OnInit,
  OnDestroy,

} from '@angular/core';
import { AdItem, AdDataComponentType } from './types';
import { AdvertisementDirective } from './ad-directive.component';
import { AdDataComponent } from './ad-data.component';

@Component({
  selector: 'advertisement-container',
  templateUrl: './ad-content.component.html',
  styleUrls: ['./ad-content.component.scss']
})
export class AdvertisementComponent implements OnInit, OnDestroy {

  // 接受传入动态的广告数据
  @Input() ads: AdItem[] = [];

  @ViewChild(AdvertisementDirective, { static: true }) advertisementHost!: AdvertisementDirective;

  interval: number | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    console.log(this, 777)

    const viewContainerRef = this.advertisementHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdDataComponentType>(AdDataComponent);
    componentRef.instance.data = this.ads[Math.random() > 0.5 ? 1 : 0];
    // console.log(viewContainerRef, 777)
  }

  getAds() {
    // typescript定时器返回类型：【调用window时返回确定的number类型】
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 1500);
  }
}
