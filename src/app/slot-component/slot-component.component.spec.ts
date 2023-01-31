import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotComponentComponent } from './slot-component.component';

describe('SlotComponentComponent', () => {
  let component: SlotComponentComponent;
  let fixture: ComponentFixture<SlotComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
