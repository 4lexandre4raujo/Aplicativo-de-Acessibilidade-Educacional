import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalkBoardPage } from './talk-board.page';

describe('TalkBoardPage', () => {
  let component: TalkBoardPage;
  let fixture: ComponentFixture<TalkBoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TalkBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
