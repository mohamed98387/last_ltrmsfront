// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit } from "@angular/core";

// importation form
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleService } from "src/app/services/role.service";

@Component({
  selector: "app-add-role",
  templateUrl: "./add-role.component.html",
  styleUrls: ["./add-role.component.scss"],
})
export class AddRoleComponent implements OnInit {
  selectedItems: any[] = [];
  dataList: any[] = [];
  typeValidationForm: FormGroup; // type validation form
  constructor(
    public formBuilder: FormBuilder,
    private roleService: RoleService,
    private modalService: NgbModal
  ) {}
  typesubmit: boolean;

  ngOnInit(): void {
    this.roleService.getPermisions().subscribe(
      (res) => {
        //  this.dataList = res;
        this.dataList = res.map((item) => ({ ...item, selected: false }));

        console.log(this.dataList);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        roleName: ["", Validators.required],
        description: ["", Validators.required],
        permissions: ["", Validators.required],
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
        roleName: this.typeValidationForm.controls.roleName.value,
        description: this.typeValidationForm.controls.description.value,
        permissions: this.selectedItems,
      };
      this.roleService.addRole(data).subscribe(
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
  onSelectionChange(): void {
    this.selectedItems = this.dataList.filter((item) => item.selected);
    /*  console.log("Selected items:", this.selectedItems);
    console.log(this.typeValidationForm);
    console.log(
      this.typeValidationForm.controls.roleName.value,
      this.typeValidationForm.controls.description.value
    );
    const data = {
      roleName: this.typeValidationForm.controls.roleName.value,
      description: this.typeValidationForm.controls.description.value,
      permissions: this.selectedItems,
    };
    console.log(data);*/
  }
}
