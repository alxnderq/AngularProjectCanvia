import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarBackComponent } from './header-bar-back.component';

describe('HeaderBarBackComponent', () => {
  let component: HeaderBarBackComponent;
  let fixture: ComponentFixture<HeaderBarBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
