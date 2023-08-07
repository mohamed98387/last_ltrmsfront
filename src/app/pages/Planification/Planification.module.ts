import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlanificationRoutingModule } from "./Planification-routing.module";
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
import { NvPlanificationComponent } from './nv-planification/nv-planification.component';
import { ActionsPlanificationsComponent } from './actions-planifications/actions-planifications.component';
import { MesActionsPlanificationsComponent } from './mes-actions-planifications/mes-actions-planifications.component';
import { PlanificationDelegueeComponent } from './planification-deleguee/planification-deleguee.component';
import { PlanificationManuelleComponent } from './planification-manuelle/planification-manuelle.component';
import { DetailPlanificationComponent } from './detail-planification/detail-planification.component';
import { NotificationAgenceComponent } from './notification-agence/notification-agence.component';
import { GestionPlanificatinAndRecapComponent } from './gestion-planificatin-and-recap/gestion-planificatin-and-recap.component';
import { RecapModifieComponent } from './recap-modifie/recap-modifie.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [NvPlanificationComponent, ActionsPlanificationsComponent, MesActionsPlanificationsComponent, PlanificationDelegueeComponent, PlanificationManuelleComponent, DetailPlanificationComponent, NotificationAgenceComponent, GestionPlanificatinAndRecapComponent, RecapModifieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanificationRoutingModule,
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
export class PlanificationModule {}
