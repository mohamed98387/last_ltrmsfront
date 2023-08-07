import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthenticationService } from "../../../core/services/auth.service";
import { AuthfakeauthenticationService } from "../../../core/services/authfake.service";
import { NavigationEnd } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { AccountService } from "src/app/services/account.service";
import { AuthInterceptor } from "src/app/interceptors/auth.interceptor";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResetPasswordComponent } from "src/app/reset-password/reset-password.component";
declare var Window: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
/**
 * Login component
 */
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private accService: AccountService
  ) {}
  formModal: any;
  alertDuration: number = 5000;
  showAlert: boolean = false;
  loginForm: FormGroup;
  submitted = false;
  error = "";
  returnUrl: string;
  params = new URLSearchParams();
  token = localStorage.getItem("token");
  headers = new HttpHeaders().set(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

  body = new HttpParams().set("username", "admin").set("password", "1234");
  // set the currenr year
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add("auth-body-bg");
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  openModal() {
    this.modalService.open(ResetPasswordComponent, {
      ariaLabelledBy: "myModal",
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      for (const key in this.loginForm.value) {
        this.params.append(key, this.loginForm.value[key]);
      }
      console.log(this.params.toString());
      this.accService.onLogin(this.params.toString(), this.headers).subscribe(
        (res: any) => {
          console.log(res);
          AuthInterceptor.accesToken = res.accesToken.toString();
          console.log(AuthInterceptor.accesToken);
          localStorage.setItem("token", res.accesToken.toString());
          localStorage.setItem("refreshToken", res.refreshToken.toString());
          this.router.navigate(["/user-list"]);
          this.params = new URLSearchParams();
        },
        (error) => {
          this.showAlert = true;
          setTimeout(() => {
            this.showAlert = false;
          }, this.alertDuration);
          this.params = new URLSearchParams();
        }
      );
    }
  }
}
