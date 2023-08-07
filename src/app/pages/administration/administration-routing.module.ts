import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./users/user-list/user-list.component";
import { RoleListComponent } from "./roles/role-list/role-list.component";
import { PermissionListComponent } from "./permissions/permission-list/permission-list.component";

const routes: Routes = [
  {
    path: "user",
    component: UserListComponent,
  },
  {
    path: "role-list",
    component: RoleListComponent,
  },
  {
    path: "permission-list",
    component: PermissionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
