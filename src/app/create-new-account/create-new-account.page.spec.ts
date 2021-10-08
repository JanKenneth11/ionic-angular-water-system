import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateNewAccountPage } from './create-new-account.page';

describe('CreateNewAccountPage', () => {
  let component: CreateNewAccountPage;
  let fixture: ComponentFixture<CreateNewAccountPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
