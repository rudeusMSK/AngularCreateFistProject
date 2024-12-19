import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPassDataFromParentToChildComponent } from './test-pass-data-from-parent-to-child.component';

describe('TestPassDataFromParentToChildComponent', () => {
  let component: TestPassDataFromParentToChildComponent;
  let fixture: ComponentFixture<TestPassDataFromParentToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPassDataFromParentToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPassDataFromParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
