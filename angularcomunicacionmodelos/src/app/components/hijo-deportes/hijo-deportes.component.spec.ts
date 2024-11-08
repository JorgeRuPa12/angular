import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDeportesComponent } from './hijo-deportes.component';

describe('HijoDeportesComponent', () => {
  let component: HijoDeportesComponent;
  let fixture: ComponentFixture<HijoDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoDeportesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
