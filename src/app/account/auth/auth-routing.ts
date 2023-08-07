import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PasswordresetComponent } from "./passwordreset/passwordreset.component";
import { UserListComponent } from "src/app/pages/administration/users/user-list/user-list.component";
import { PermissionListComponent } from "src/app/pages/administration/permissions/permission-list/permission-list.component";
import { DefaultComponent } from "src/app/pages/dashboards/default/default.component";
import { LayoutComponent } from "src/app/layouts/layout.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () =>
      import("../../pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth.module").then((m) => m.AuthModule),
  },
  {
    path: "default",
    component: DefaultComponent,
  },
  {
    path: "administration",
    loadChildren: () =>
      import("../../pages/administration/administration.module").then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: "permission-list",
    component: PermissionListComponent,
  },
  {
    path: "user-list",
    component: UserListComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "reset-password",
    component: PasswordresetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
