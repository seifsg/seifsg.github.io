import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulResComponent } from './useful-res.component';

describe('UsefulResComponent', () => {
  let component: UsefulResComponent;
  let fixture: ComponentFixture<UsefulResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
