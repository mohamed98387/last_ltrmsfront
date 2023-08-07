import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HebdomadaireComponent } from "./hebdomadaire/hebdomadaire.component";
import { NvPlanificationComponent } from "./nv-planification/nv-planification.component";
import { ActionsPlanificationsComponent } from "./actions-planifications/actions-planifications.component";

const routes: Routes = [
  {
    path: "hebdomadaire",
    component: HebdomadaireComponent,
  },
  {
    path: "NvPlanification",
    component: NvPlanificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanificationRoutingModule {}
