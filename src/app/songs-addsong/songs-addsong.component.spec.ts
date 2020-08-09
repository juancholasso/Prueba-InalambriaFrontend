import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsAddsongComponent } from './songs-addsong.component';

describe('SongsAddsongComponent', () => {
  let component: SongsAddsongComponent;
  let fixture: ComponentFixture<SongsAddsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsAddsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsAddsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
