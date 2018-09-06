import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCallComponent } from './welcome-call.component';

describe('WelcomeCallComponent', () => {
  let component: WelcomeCallComponent;
  let fixture: ComponentFixture<WelcomeCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
