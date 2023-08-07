import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../services/account.service";
@Component({
  selector: "app-new-password",
  templateUrl: "./new-password.component.html",
  styleUrls: ["./new-password.component.scss"],
})
export class NewPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AccountService
  ) {}
  loginForm: FormGroup;
  enableForm: boolean = true;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [""],
      code: [""],
      password: [""],
    });
  }
  navigate() {
    console.log("navigate");
    this.router.navigate(["/"]);
  }
  doneOne() {
    //   console.log(this.loginForm.controls.email.value);
    this.auth.checkEmail(this.loginForm.controls.email.value).subscribe(
      (res: any) => {
        if (res.result == 1) {
          alert("check email");
          this.enableForm = false;
        } else {
          alert("email not found");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  doneTwo() {
    // console.log(this.loginForm.controls.code.value);
    // console.log(this.loginForm.controls.password.value);
    this.auth
      .resetPassword(
        this.loginForm.controls.email.value,
        this.loginForm.controls.code.value,
        this.loginForm.controls.password.value
      )
      .subscribe(
        (res: any) => {
          if (res.result == 1) {
            alert("Success Edit Password");
            this.router.navigate(["/"]);
            //this.enableForm = false;
          } else {
            alert("invalid code");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  back() {
    this.router.navigate(["/"]);
  }
}
