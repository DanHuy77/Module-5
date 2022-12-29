import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryEngComponent } from './dictionary-eng.component';

describe('DictionaryEngComponent', () => {
  let component: DictionaryEngComponent;
  let fixture: ComponentFixture<DictionaryEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
