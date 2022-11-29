import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamHomeStartedComponent } from './dream-home-started.component';

describe('DreamHomeStartedComponent', () => {
  let component: DreamHomeStartedComponent;
  let fixture: ComponentFixture<DreamHomeStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DreamHomeStartedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamHomeStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
