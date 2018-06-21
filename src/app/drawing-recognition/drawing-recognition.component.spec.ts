import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingRecognitionComponent } from './drawing-recognition.component';

describe('DrawingRecognitionComponent', () => {
  let component: DrawingRecognitionComponent;
  let fixture: ComponentFixture<DrawingRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
