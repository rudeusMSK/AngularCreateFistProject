import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BntClickComponent } from './bnt-click.component';

describe('BntClickComponent', () => {
  let component: BntClickComponent;
  let fixture: ComponentFixture<BntClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BntClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BntClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
