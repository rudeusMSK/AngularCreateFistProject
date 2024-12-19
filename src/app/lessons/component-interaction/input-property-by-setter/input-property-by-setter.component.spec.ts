import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyBySetterComponent } from './input-property-by-setter.component';

describe('InputPropertyBySetterComponent', () => {
  let component: InputPropertyBySetterComponent;
  let fixture: ComponentFixture<InputPropertyBySetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPropertyBySetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPropertyBySetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
