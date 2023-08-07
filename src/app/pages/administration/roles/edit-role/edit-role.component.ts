import { Component, OnInit, Input } from "@angular/core";
// importation form
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { RoleService } from "src/app/services/role.service";
@Component({
  selector: "app-edit-role",
  templateUrl: "./edit-role.component.html",
  styleUrls: ["./edit-role.component.scss"],
})
export class EditRoleComponent implements OnInit {
  @Input() selectedRole: any;
  dataList: any[] = [];
  selectedItems: any[] = [];
  typeValidationForm: FormGroup; // type validation form
  selected: any;
  constructor(
    public formBuilder: FormBuilder,
    private roleService: RoleService
  ) {}
  typesubmit: boolean;
  ngOnInit(): void {
    console.log(this.selectedRole);
    console.log(this.dataList);
    this.roleService.getPermisions().subscribe(
      (res) => {
        this.dataList = res.map((item) => ({
          ...item,
          selected: false,
        }));

        this.selectedRole.permissions.forEach((permission) => {
          const foundItem = this.dataList.find(
            (item) => item.permissionName === permission.permissionName
          );
          if (foundItem) {
            foundItem.selected = true;
          }
        });
        console.log(this.dataList);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    this.initializeRoleForm();
  }

  get type() {
    return this.typeValidationForm.controls;
  }

  typeSubmit() {
    if (this.typeValidationForm.invalid) {
      return;
    } else {
      this.typesubmit = true;
      const data = {
        id: this.selectedRole.id,
        roleName: this.typeValidationForm.controls.roleName.value,
        description: this.typeValidationForm.controls.description.value,
        permissions: this.selectedItems,
      };
      console.log(data);
      this.roleService.updateRole(data).subscribe(
        (res) => {
          console.log(res);
          alert("role updated");
        },
        (error) => {
          console.error("Error in add role:", error);
        }
      );
    }
  }

  initializeRoleForm() {
    console.log(this.dataList);
    this.typeValidationForm = this.formBuilder.group({
      roleName: [this.selectedRole ? this.selectedRole.roleName : ""],
      description: [this.selectedRole ? this.selectedRole.description : ""],
    });
  }
  onSelectionChange(item: any): void {
    item.selected = !item.selected;
    this.selectedItems = this.dataList.filter((item) => item.selected);
    console.log("Selected items:", this.selectedItems);
  }
}
