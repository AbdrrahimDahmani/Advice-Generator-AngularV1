import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesComponent } from './advices.component';

describe('AdvicesComponent', () => {
  let component: AdvicesComponent;
  let fixture: ComponentFixture<AdvicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
