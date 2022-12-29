import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryVieComponent } from './dictionary-vie.component';

describe('DictionaryVieComponent', () => {
  let component: DictionaryVieComponent;
  let fixture: ComponentFixture<DictionaryVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryVieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
