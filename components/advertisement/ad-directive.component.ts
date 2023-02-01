import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[advertisementHost]',
})
export class AdvertisementDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
