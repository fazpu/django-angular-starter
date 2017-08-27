import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthRegistrationComponent } from './registration.component';

import { TEST_IMPORTS, TEST_PROVIDERS } from '../../tests/conf-test-module';


describe('RegistrationComponent', () => {
  let component: AuthRegistrationComponent ;
  let fixture: ComponentFixture<AuthRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRegistrationComponent ],
      imports: [
        ...TEST_IMPORTS
      ],
      providers: [
        ...TEST_PROVIDERS
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
