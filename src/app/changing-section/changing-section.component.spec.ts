import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingSectionComponent } from './changing-section.component';

describe('ChangingSectionComponent', () => {
  let component: ChangingSectionComponent;
  let fixture: ComponentFixture<ChangingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
