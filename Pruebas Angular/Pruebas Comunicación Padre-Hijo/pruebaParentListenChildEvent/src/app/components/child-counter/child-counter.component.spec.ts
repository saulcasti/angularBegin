import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCounterComponent } from './child-counter.component';

describe('ChildCounterComponent', () => {
  let component: ChildCounterComponent;
  let fixture: ComponentFixture<ChildCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
