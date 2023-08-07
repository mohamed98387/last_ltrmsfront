import { Component, Input, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
// importation form
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Observable } from "rxjs";
import { RoleService } from "src/app/services/role.service";
function validateEmail(
  control: AbstractControl
): { [key: string]: any } | null {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (control.value && !emailPattern.test(control.value)) {
    return { invalidEmail: true };
  }

  return null;
}
@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  token = localStorage.getItem("token");
  typesubmit: boolean;
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", "Bearer " + this.token);

  ngOnInit(): void {
    /**
     * Type validation form
     */
    // console.log(this.typeValidationForm.controls.nom);
    this.typeValidationForm = this.formBuilder.group(
      {
        nom: ["", Validators.required],
        login: ["", Validators.required],
        password: ["", Validators.required],
        email: ["", Validators.required, this.validateEmailAsync],
        phone: ["", Validators.required],
        city: ["", Validators.required],
        organisation: ["Leoni Monastir", Validators.required],
        role: ["ADMIN", Validators.required],
      },
      {}
    );
  }

  /**
   * Returns the type validation form
   */
  get type() {
    return this.typeValidationForm.controls;
  }
  /**
   * Type validation form submit data
   */
  typeSubmit() {
    const data = {
      userName: this.typeValidationForm.controls.login.value,
      password: this.typeValidationForm.controls.password.value,
      name: this.typeValidationForm.controls.nom.value,
      email: this.typeValidationForm.controls.email.value,
      phone: this.typeValidationForm.controls.phone.value,
      city: this.typeValidationForm.controls.city.value,
      organization: this.typeValidationForm.controls.organisation.value,
      role: this.typeValidationForm.controls.role.value,
    };
    this.typesubmit = true;
    console.log(this.type.email);
    console.log(this.typeValidationForm.invalid);
    console.log(this.typeValidationForm.value);
    if (this.typeValidationForm.invalid) {
      return;
    } else {
      this.userService.addUser(data, this.headers).subscribe(
        (res: any) => {
          //  localStorage.setItem("token", res.accesToken.toString());
          //  this.router.navigate(["/user-list"]);
          //  this.params = new URLSearchParams();
          console.log(res);
          if (res == null) {
            alert("email exist");
            this.modalService.dismissAll();
          } else {
            alert("user added successfully");
            this.modalService.dismissAll();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  validateEmailAsync(
    control: AbstractControl
  ): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return new Promise<{ [key: string]: any }>((resolve, reject) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (control.value && !emailPattern.test(control.value)) {
        resolve({ invalidEmail: true }); // Email is invalid
      } else {
        resolve(null); // Email is valid
      }
    });
  }
  addUser() {
    //  this.submitted = true;

    // stop here if form is invalid

    ///   if (this.typeValidationForm.invalid) {
    //    return;
    //    } else {

    // console.log(this.params.toString());
    console.log(
      this.typeValidationForm.controls.nom.value,
      this.typeValidationForm.controls.password.value
    );

    //  }
  }
}
