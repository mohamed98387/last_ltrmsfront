import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdministrationRoutingModule } from "./administration-routing.module";
import { UIModule } from "../../shared/ui/ui.module";
import { WidgetModule } from "../../shared/widget/widget.module";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { RoleListComponent } from "./roles/role-list/role-list.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { PermissionListComponent } from "./permissions/permission-list/permission-list.component";
import { UserListDirective } from "./users/user-list/user-list.directive";
import { AddUserComponent } from "./users/add-user/add-user.component";
import { EditUserComponent } from "./users/edit-user/edit-user.component";
import { RoleListDirective } from "./roles/role-list/role-list.directive";
import { AddRoleComponent } from "./roles/add-role/add-role.component";
import { EditRoleComponent } from "./roles/edit-role/edit-role.component";
import { AddPermissionComponent } from './permissions/add-permission/add-permission.component';
import { EditPermissionComponent } from './permissions/edit-permission/edit-permission.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    RoleListComponent,
    UserListComponent,
    PermissionListComponent,
    UserListDirective,
    AddUserComponent,
    EditUserComponent,
    RoleListDirective,
    AddRoleComponent,
    EditRoleComponent,
    AddPermissionComponent,
    EditPermissionComponent,
    PermissionListComponent,
    AddPermissionComponent,
    EditPermissionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdministrationRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    ///
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
  ],
})
export class AdministrationModule {}
