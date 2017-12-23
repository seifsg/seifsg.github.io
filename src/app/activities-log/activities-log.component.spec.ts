import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesLogComponent } from './activities-log.component';

describe('ActivitiesLogComponent', () => {
  let component: ActivitiesLogComponent;
  let fixture: ComponentFixture<ActivitiesLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
