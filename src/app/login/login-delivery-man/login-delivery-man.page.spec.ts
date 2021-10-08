import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginDeliveryManPage } from './login-delivery-man.page';

describe('LoginDeliveryManPage', () => {
  let component: LoginDeliveryManPage;
  let fixture: ComponentFixture<LoginDeliveryManPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDeliveryManPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginDeliveryManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
