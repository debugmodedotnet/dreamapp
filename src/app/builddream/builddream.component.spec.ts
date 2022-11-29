import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilddreamComponent } from './builddream.component';

describe('BuilddreamComponent', () => {
  let component: BuilddreamComponent;
  let fixture: ComponentFixture<BuilddreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuilddreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilddreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
