import {ComponentFixture, TestBed} from "@angular/core/testing";

import {SigninComponent} from "./signin.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

describe("SigninComponent", () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  describe("Given form", () => {
    it("should disable the recover password button when email is empty", function () {
      setEmail("");

      expect(recoverPasswordButton().disabled).toBeTruthy();
    });

    it("should disable the recover password button when email is invalid", function () {
      setEmail("invalidEmail");

      expect(recoverPasswordButton().disabled).toBeTruthy();
    });

    it("should enable the recover password button when email is valid", function () {
      setEmail("valid@email.com");

      expect(recoverPasswordButton().disabled).toBeFalsy();
    });

    it("should disable the login button when email is empty", function () {
      setEmail("");
      setPassword("anyPassword");

      expect(loginButton().disabled).toBeTruthy();
    });

    it("should disable the login button when email is invalid", function () {
      setEmail("invalidEmail");
      setPassword("anyPassword");

      expect(loginButton().disabled).toBeTruthy();
    });

    it("should disable the login button when password is empty", function () {
      setEmail("valid@email.com");
      setPassword("");

      expect(loginButton().disabled).toBeTruthy();
    });

    it("should enable the login button when password is not empty", function () {
      setEmail("valid@email.com");
      setPassword("anyPassword");

      expect(loginButton().disabled).toBeFalsy();
    });

  });

  function setEmail(value: string) {
    component.form.get("email")?.setValue(value);
    fixture.detectChanges();
  }

  function setPassword(value: string) {
    component.form.get("password")?.setValue(value);
    fixture.detectChanges();
  }

  function recoverPasswordButton() {
    return page.querySelector("[test-id='recover-password-button']");
  }

  function loginButton() {
    return page.querySelector("[test-id='login-button']");
  }

});
