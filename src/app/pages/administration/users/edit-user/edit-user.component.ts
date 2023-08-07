import { Component, OnInit, Input } from "@angular/core";
import { Table } from "../user-list/user-list.model";
// importation form
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from "@angular/forms";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser: any;
  typeValidationForm: FormGroup; // type validation form
  selected = "option2";
  typesubmit: boolean;
  fakeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    console.log(this.selectedUser);
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        nom: [this.selectedUser.name, Validators.required],
        login: [this.selectedUser.userName, Validators.required],

        email: [
          this.selectedUser.email,
          Validators.required,
          this.validateEmailAsync,
        ],
        phone: [this.selectedUser.phone, Validators.required],
        city: [this.selectedUser.city, Validators.required],
        organisation: [this.selectedUser.organization, Validators.required],
        role: [this.selectedUser.role, Validators.required],
      },
      {}
    );
  }
  /**
   * Returns the type validation form ??
   */
  get type() {
    return this.typeValidationForm.controls;
  }
  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
  }
  getdata() {
    return null;
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
  updateUser() {
    const data = {
      id: this.selectedUser.id,
      userName: this.typeValidationForm.controls.login.value,

      name: this.typeValidationForm.controls.nom.value,
      email: this.typeValidationForm.controls.email.value,
      phone: this.typeValidationForm.controls.phone.value,
      city: this.typeValidationForm.controls.city.value,
      organization: this.typeValidationForm.controls.organisation.value,
      role: this.typeValidationForm.controls.role.value,
    };
    console.log(data);
    this.userService.updateUser(data).subscribe(
      (res: any) => {
        //  localStorage.setItem("token", res.accesToken.toString());
        //  this.router.navigate(["/user-list"]);
        //  this.params = new URLSearchParams();
        console.log(res);
        alert("user updated");
        this.modalService.dismissAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
