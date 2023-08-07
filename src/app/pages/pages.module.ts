import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NgbNavModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";

import { WidgetModule } from "../shared/widget/widget.module";
import { UIModule } from "../shared/ui/ui.module";

import { FullCalendarModule } from "@fullcalendar/angular";

import { PagesRoutingModule } from "./pages-routing.module";

import { DashboardsModule } from "./dashboards/dashboards.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoaderService } from "../core/services/loader.service";
import { LoaderInterceptorService } from "../core/services/interceptors/loader-interceptor.service";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { AddChauffeurComponent } from "./callaborateurs_Ex/chauffeur/add-chauffeur/add-chauffeur.component";
import { ChauffeurListComponent } from "./callaborateurs_Ex/chauffeur/chauffeur-list/chauffeur-list.component";
import { EditChauffeurComponent } from "./callaborateurs_Ex/chauffeur/edit-chauffeur/edit-chauffeur.component";
import { AddVehiculeComponent } from "./callaborateurs_Ex/vehicule/add-vehicule/add-vehicule.component";
import { VehiculeListComponent } from "./callaborateurs_Ex/vehicule/vehicule-list/vehicule-list.component";
import { EditVehiculeComponent } from "./callaborateurs_Ex/vehicule/edit-vehicule/edit-vehicule.component";
import { AddPlantSectionComponent } from "./callaborateurs_interne/plant_section/add-plant-section/add-plant-section.component";
import { PlantSectionListComponent } from "./callaborateurs_interne/plant_section/plant-section-list/plant-section-list.component";
import { EditPlantSectionComponent } from "./callaborateurs_interne/plant_section/edit-plant-section/edit-plant-section.component";
import { HebdomadaireComponent } from "./Planification/hebdomadaire/hebdomadaire.component";

// import { UserComponent } from './administration/user-list/user-list.component';
// import { ListUserComponent } from './Administration/User/list-user-list/list-user-list.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
]);

@NgModule({
  declarations: [HebdomadaireComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    HttpClientModule,
    UIModule,
    WidgetModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
})
export class PagesModule {}
