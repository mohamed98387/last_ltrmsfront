import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgenceListComponent } from "./agence/agence-list/agence-list.component";
import { VehiculeListComponent } from "./vehicule/vehicule-list/vehicule-list.component";

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class callaborateurs_ExRoutingModule {}
