import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubComponentComponent } from './first-sub-component.component';

describe('FirstSubComponentComponent', () => {
  let component: FirstSubComponentComponent;
  let fixture: ComponentFixture<FirstSubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSubComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
