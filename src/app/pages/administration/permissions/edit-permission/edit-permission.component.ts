import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PermissionService } from "src/app/services/permission.service";
@Component({
  selector: "app-edit-permission",
  templateUrl: "./edit-permission.component.html",
  styleUrls: ["./edit-permission.component.scss"],
})
export class EditPermissionComponent implements OnInit {
  @Input() selectedPermission: any;
  typeValidationForm: FormGroup; // type validation form
  selected = "option2";
  constructor(public formBuilder: FormBuilder,private permissionService:PermissionService,    private modalService: NgbModal) {}
  typesubmit: boolean;
  ngOnInit(): void {
    console.log(this.selectedPermission);

    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        permissionName: [this.selectedPermission ? this.selectedPermission.permissionName : ""],
        description: [this.selectedPermission ? this.selectedPermission.description : ""],
       
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
      id: this.selectedPermission.id,
      permissionName: this.typeValidationForm.controls.permissionName.value,
      description: this.typeValidationForm.controls.description.value,
     
    };
    console.log(data);
   this.permissionService.updatepermission(data).subscribe(
      (res) => {
        console.log(res);
        alert("permission updated");
        this.modalService.dismissAll();
      },
      (error) => {
        console.error("Error in add role:", error);
      }
    );
    }
  }
}

