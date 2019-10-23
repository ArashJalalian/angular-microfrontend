import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Child1Component } from './app2-child1.component';

describe('App2Child1Component', () => {
  let component: App2Child1Component;
  let fixture: ComponentFixture<App2Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
