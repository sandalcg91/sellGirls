import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhantaComponent } from './ghanta.component';

describe('GhantaComponent', () => {
  let component: GhantaComponent;
  let fixture: ComponentFixture<GhantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
