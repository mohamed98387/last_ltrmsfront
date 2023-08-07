import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { callaborateurs_interneRoutingModule } from "./callaborateurs_interne-routing.module";
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
import { AddSegmentComponent } from "./segment/add-segment/add-segment.component";
import { SegmentListComponent } from "./segment/segment-list/segment-list.component";
import { EditSegmentComponent } from "./segment/edit-segment/edit-segment.component";
import { AddEmployesComponent } from "./employes/add-employes/add-employes.component";
import { EditEmployesComponent } from "./employes/edit-employes/edit-employes.component";
import { EmployesListComponent } from "./employes/employes-list/employes-list.component";
import { CircuitListComponent } from "./circuit/circuit-list/circuit-list.component";
import { AddCircuitComponent } from "./circuit/add-circuit/add-circuit.component";
import { EditCircuitComponent } from "./circuit/edit-circuit/edit-circuit.component";
import { StationListComponent } from "./station/station-list/station-list.component";
import { AddStationComponent } from "./station/add-station/add-station.component";
import { EditStationComponent } from "./station/edit-station/edit-station.component";
import { AddPlantSectionComponent } from "./plant_section/add-plant-section/add-plant-section.component";
import { EditPlantSectionComponent } from "./plant_section/edit-plant-section/edit-plant-section.component";
import { PlantSectionListComponent } from "./plant_section/plant-section-list/plant-section-list.component";

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AddSegmentComponent,
    SegmentListComponent,
    EditSegmentComponent,
    AddEmployesComponent,
    EditEmployesComponent,
    EmployesListComponent,
    CircuitListComponent,
    AddCircuitComponent,
    EditCircuitComponent,
    StationListComponent,
    AddStationComponent,
    EditStationComponent,
    AddPlantSectionComponent,
    EditPlantSectionComponent,
    PlantSectionListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    callaborateurs_interneRoutingModule,
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
export class callaborateurs_interneModule {}
