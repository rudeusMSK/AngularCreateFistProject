import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsParentComponent } from './lessons-parent.component';

describe('LessonsParentComponent', () => {
  let component: LessonsParentComponent;
  let fixture: ComponentFixture<LessonsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
