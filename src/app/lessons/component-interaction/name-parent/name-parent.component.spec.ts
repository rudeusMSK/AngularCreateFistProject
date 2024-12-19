import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameParentComponent } from './name-parent.component';

describe('NameParentComponent', () => {
  let component: NameParentComponent;
  let fixture: ComponentFixture<NameParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
