import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtwoksPageComponent } from './artwoks-page.component';

describe('ArtwoksPageComponent', () => {
  let component: ArtwoksPageComponent;
  let fixture: ComponentFixture<ArtwoksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtwoksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtwoksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
