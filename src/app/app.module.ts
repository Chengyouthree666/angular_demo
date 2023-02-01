import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// devui部分动画依赖
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
// devui组件库
import { DevUIModule } from 'ng-devui';
import { TextInputModule } from 'ng-devui/text-input';
// 子组件注册
import { CommuniteTestComponent } from './communite-test/communite-test.component';
import { SlotComponentComponent } from './slot-component/slot-component.component';
import { AdvertisementComponent } from '../../components/advertisement/ad-content.component';
import { AdDataComponent } from 'components/advertisement/ad-data.component';
import { AdvertisementDirective } from 'components/advertisement/ad-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CommuniteTestComponent,
    SlotComponentComponent,
    AdvertisementComponent,
    AdDataComponent,
    AdvertisementDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DevUIModule,
    TextInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
