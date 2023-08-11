import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlantSectionListComponent } from "./plant_section/plant-section-list/plant-section-list.component";

const routes: Routes = [
  {
    path: "plant-section-list",
    component: PlantSectionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class callaborateurs_interneRoutingModule {}
