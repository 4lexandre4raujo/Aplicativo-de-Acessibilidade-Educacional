import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleTutorialPage } from './braille-tutorial.page';

describe('BrailleTutorialPage', () => {
  let component: BrailleTutorialPage;
  let fixture: ComponentFixture<BrailleTutorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
