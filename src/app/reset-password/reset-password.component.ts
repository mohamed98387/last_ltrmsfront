import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../services/account.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private auth: AccountService,
    private router: Router
  ) {}
  submitted = false;
  loginForm: FormGroup;
  enableForm: boolean = true;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [""],
      code: [""],
      password: [""],
    });
  }
  doSomthing() {
    this.modalService.dismissAll();
  }
  get f() {
    return this.loginForm.controls;
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
            this.modalService.dismissAll();
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
}
