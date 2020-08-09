import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAddmusicComponent } from './playlist-addmusic.component';

describe('PlaylistAddmusicComponent', () => {
  let component: PlaylistAddmusicComponent;
  let fixture: ComponentFixture<PlaylistAddmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAddmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAddmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
