import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationCategoriesComponent } from './administration-categories.component';

describe('AdministrationCategoriesComponent', () => {
  let component: AdministrationCategoriesComponent;
  let fixture: ComponentFixture<AdministrationCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
