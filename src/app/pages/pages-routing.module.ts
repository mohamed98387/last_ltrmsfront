import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./administration/users/user-list/user-list.component";
import { DefaultComponent } from "./dashboards/default/default.component";
import { RoleListComponent } from "./administration/roles/role-list/role-list.component";
import { PermissionListComponent } from "./administration/permissions/permission-list/permission-list.component";
import { AgenceListComponent } from "./callaborateurs_Ex/agence/agence-list/agence-list.component";
import { ChauffeurListComponent } from "./callaborateurs_Ex/chauffeur/chauffeur-list/chauffeur-list.component";
import { VehiculeListComponent } from "./callaborateurs_Ex/vehicule/vehicule-list/vehicule-list.component";
import { PlantSectionListComponent } from "./callaborateurs_interne/plant_section/plant-section-list/plant-section-list.component";
import { CircuitListComponent } from "./callaborateurs_interne/circuit/circuit-list/circuit-list.component";
import { StationListComponent } from "./callaborateurs_interne/station/station-list/station-list.component";
import { EmployesListComponent } from "./callaborateurs_interne/employes/employes-list/employes-list.component";
import { SegmentListComponent } from "./callaborateurs_interne/segment/segment-list/segment-list.component";
import { HebdomadaireComponent } from "./Planification/hebdomadaire/hebdomadaire.component";
import { NvPlanificationComponent } from "./Planification/nv-planification/nv-planification.component";
import { ActionsPlanificationsComponent } from "./Planification/actions-planifications/actions-planifications.component";
import { MesActionsPlanificationsComponent } from "./Planification/mes-actions-planifications/mes-actions-planifications.component";
import { PlanificationDelegueeComponent } from "./Planification/planification-deleguee/planification-deleguee.component";
import { PlanificationManuelleComponent } from "./Planification/planification-manuelle/planification-manuelle.component";
import { DetailPlanificationComponent } from "./Planification/detail-planification/detail-planification.component";
import { NotificationAgenceComponent } from "./Planification/notification-agence/notification-agence.component";
import { GestionPlanificatinAndRecapComponent } from "./Planification/gestion-planificatin-and-recap/gestion-planificatin-and-recap.component";
import { RecapModifieComponent } from "./Planification/recap-modifie/recap-modifie.component";
const routes: Routes = [
  // { path: '', redirectTo: 'users' },
  //
  { path: "user-list", component: UserListComponent },
  { path: "role-list", component: RoleListComponent },
  { path: "permission-list", component: PermissionListComponent },
  {
    path: "administration",
    loadChildren: () =>
      import("./administration/administration.module").then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: "callaborateurs_Ex",
    loadChildren: () =>
      import("./callaborateurs_Ex/callaborateurs_Ex.modulE").then(
        (m) => m.callaborateurs_ExModule
      ),
  },
  {
    path: "callaborateurs_interne",
    loadChildren: () =>
      import("./callaborateurs_interne/callaborateurs_interne.module").then(
        (m) => m.callaborateurs_interneModule
      ),
  },
  {
    path: "Planification",
    loadChildren: () =>
      import("./Planification/Planification.module").then(
        (m) => m.PlanificationModule
      ),
  },
  {
    path: "PlanificationManuelle",
    component: PlanificationManuelleComponent,
  },
  {
    path: "NvPlanification",
    component: NvPlanificationComponent,
  },
  {
    path: "actionsPlanifications",
    component: ActionsPlanificationsComponent,
  },
  {
    path: "MesactionsPlanifications",
    component: MesActionsPlanificationsComponent,
  },
  {
    path: "PlanificationDeleguee",
    component: PlanificationDelegueeComponent,
  },
  {
    path: "DetailPlanification",
    component: DetailPlanificationComponent,
  },
  {
    path: "NotificationAgence",
    component: NotificationAgenceComponent,
  },
  {
    path: "GestionPlanificationAndRecap",
    component: GestionPlanificatinAndRecapComponent,
  },
  {
    path: "RecapModifiee",
    component: RecapModifieComponent,
  },
  { path: "hebdomadaire", component: HebdomadaireComponent },
  { path: "vehicule-list", component: VehiculeListComponent },
  { path: "agence-list", component: AgenceListComponent },
  { path: "chauffeur-list", component: ChauffeurListComponent },
  { path: "plant-section-list", component: PlantSectionListComponent },
  { path: "circuit-list", component: CircuitListComponent },
  { path: "station-list", component: StationListComponent },
  { path: "employes-list", component: EmployesListComponent },
  { path: "segment-list", component: SegmentListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
