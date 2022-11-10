import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathCountByCharacterPage } from './death-count-by-character.page';

describe('DeathCountByCharacterPage', () => {
  let component: DeathCountByCharacterPage;
  let fixture: ComponentFixture<DeathCountByCharacterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathCountByCharacterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathCountByCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
