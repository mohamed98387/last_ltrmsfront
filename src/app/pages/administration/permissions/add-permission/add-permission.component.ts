import { Component, OnInit } from "@angular/core";
// import { Component, OnInit } from '@angular/core';

// importation form
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PermissionService } from "src/app/services/permission.service";

@Component({
  selector: "app-add-permission",
  templateUrl: "./add-permission.component.html",
  styleUrls: ["./add-permission.component.scss"],
})
export class AddPermissionComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form
  constructor(
    public formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private modalService: NgbModal
  ) {}
  typesubmit: boolean;

  ngOnInit(): void {
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        permissionName: ["", Validators.required],
        description: ["", Validators.required],
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
    if (this.typeValidationForm.invalid) {
      return;
    } else {
      this.typesubmit = true;
      const data = {
        permissionName: this.typeValidationForm.controls.permissionName.value,
        description: this.typeValidationForm.controls.description.value,
      };
      console.log(data);
      this.permissionService.addpermission(data).subscribe(
        (res) => {
          //  this.dataList = res;

          console.log(res);
          this.modalService.dismissAll();
        },
        (error) => {
          console.error("Error in add role:", error);
        }
      );
    }
  }
}
