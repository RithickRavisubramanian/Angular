import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidboxComponent } from './midbox.component';

describe('MidboxComponent', () => {
  let component: MidboxComponent;
  let fixture: ComponentFixture<MidboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
