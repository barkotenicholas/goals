import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalalDetailComponentComponent } from './goalal-detail-component.component';

describe('GoalalDetailComponentComponent', () => {
  let component: GoalalDetailComponentComponent;
  let fixture: ComponentFixture<GoalalDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalalDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalalDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
