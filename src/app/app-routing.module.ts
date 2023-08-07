import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/guards/auth.guard";
import { LayoutComponent } from "./layouts/layout.component";
import { LoginComponent } from "./account/auth/login/login.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
// import {DefaultComponent} from "./pages/dashboards/default/default.component";
// import {ListUserComponent} from "./pages/Administration/User/list-user-list/list-user-list.component";

const routes: Routes = [
 
  { path: "", component: LoginComponent },
  // { path: 'dashboard', component: LayoutComponent },
  // { path: 'users', component: ListUserComponent },
  {
    path: "administration",
    loadChildren: () =>
      import("./pages/administration/administration.module").then(
        (m) => m.AdministrationModule
      ),
  },

  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
  // tslint:disable-next-line: max-line-length
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
  { path: "new-password", component: NewPasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
