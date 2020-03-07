import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectMeComponent } from './redirect-me.component';

describe('RedirectMeComponent', () => {
  let component: RedirectMeComponent;
  let fixture: ComponentFixture<RedirectMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
