import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFormComponent } from './star-form.component';

describe('StarFormComponent', () => {
  let component: StarFormComponent;
  let fixture: ComponentFixture<StarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
