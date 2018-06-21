import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachableComponent } from './teachable.component';

describe('TeachableComponent', () => {
  let component: TeachableComponent;
  let fixture: ComponentFixture<TeachableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
