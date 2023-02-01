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
  // SimpleChange,
} from '@angular/core';
import { Friend } from './types';
import { AdItem } from 'components/advertisement/types';
import { DialogService } from 'ng-devui/modal';

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
  message: string = '';
  isActive: boolean = false;
  friendList: Friend[] = [];

  ads: AdItem[] = []
  showAd: boolean = true;

  constructor(private dialogService: DialogService) {
    console.log();
  }

  // 接受子组件的回应
  receiveMsg(msg: string): void {
    this.isActive = !this.isActive;
    this.message = msg;
  }
  adJump(): void {
    const results = this.dialogService.open({
      id: 'ad-close-dialog',
      width: '300px',
      maxHeight: '500px',
      title: '是否关闭广告',
      html: true,
      content: '<div style="color:#8a6d3b;">Press Enter to close</div>',
      backdropCloseable: true,
      // dialogtype: dialogtype,
      buttons: [
        {
          btnwidth: '100px',
          cssClass: 'primary',
          text: '确定',
          autofocus: true,
          handler: () => {
            results.modalInstance.hide();
            this.showAd = !this.showAd
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: () => {
            results.modalInstance.hide();
          },
        },
      ],
    });
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
    this.ads = [
      {
        company: 'Apple',
        goods: [
          { name: 'iphone13', price: 5999 },
          { name: 'ipadPro', price: 7999 },
          { name: 'macbook', price: 10999 },
        ],
      },
      {
        company: 'Huawei',
        goods: [
          { name: 'mate50pro', price: 6999 },
          { name: 'H-watch', price: 1999 },
          { name: 'H-laptop', price: 7999 },
        ],
      },
    ]
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
