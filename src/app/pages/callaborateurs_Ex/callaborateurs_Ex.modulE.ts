import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { callaborateurs_ExRoutingModule } from "./callaborateurs_Ex-routing.module";
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
import { VehiculeListComponent } from "./vehicule/vehicule-list/vehicule-list.component";
import { AddVehiculeComponent } from "./vehicule/add-vehicule/add-vehicule.component";
import { EditVehiculeComponent } from "./vehicule/edit-vehicule/edit-vehicule.component";
import { ChauffeurListComponent } from "./chauffeur/chauffeur-list/chauffeur-list.component";
import { AddChauffeurComponent } from "./chauffeur/add-chauffeur/add-chauffeur.component";
import { EditChauffeurComponent } from "./chauffeur/edit-chauffeur/edit-chauffeur.component";
import { AgenceListComponent } from "./agence/agence-list/agence-list.component";
import { AddAgenceComponent } from "./agence/add-agence/add-agence.component";
import { EditAgenceComponent } from "./agence/edit-agence/edit-agence.component";
import { AgenceListDirective } from "./agence/agence-list/agence-list.directive";

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    VehiculeListComponent,
    AddVehiculeComponent,
    EditVehiculeComponent,
    ChauffeurListComponent,
    AddChauffeurComponent,
    EditChauffeurComponent,
    AgenceListComponent,
     AddAgenceComponent,
    EditAgenceComponent,
    AgenceListDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    callaborateurs_ExRoutingModule,
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
export class callaborateurs_ExModule {}
