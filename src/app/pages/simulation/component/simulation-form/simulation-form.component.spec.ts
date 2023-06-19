// component
import { SimulationFormComponent } from './simulation-form.component';

// package
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SimulationFormComponent', () => {
  let component: SimulationFormComponent;
  let fixture: ComponentFixture<SimulationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
