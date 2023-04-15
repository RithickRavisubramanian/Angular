import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotboxComponent } from './botbox.component';

describe('BotboxComponent', () => {
  let component: BotboxComponent;
  let fixture: ComponentFixture<BotboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
