import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniteTestComponent } from './communite-test.component';

describe('CommuniteTestComponent', () => {
  let component: CommuniteTestComponent;
  let fixture: ComponentFixture<CommuniteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuniteTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuniteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
