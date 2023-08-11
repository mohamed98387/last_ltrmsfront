import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table

import { Table } from "./plant-section-list.model";
import { tableData } from "./data-plant-section-list";
import { AdvancedService } from "./plant-section-list.service";
import {
  PlantSectionListDirective,
  SortEvent,
} from "./plant-section-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PlantSectionService } from "src/app/services/plant-section.service";

@Component({
  selector: "app-plant-section-list",
  templateUrl: "./plant-section-list.component.html",
  styleUrls: ["./plant-section-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class PlantSectionListComponent implements OnInit {
  addModal: NgbModal;
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  newTable: any[] = [];
  @ViewChildren(PlantSectionListDirective)headers: QueryList<PlantSectionListDirective>;
  public isCollapsed = true;
  selectedplantSection: Table;
  constructor(public service: AdvancedService, private modalService: NgbModal, private plantSectionService: PlantSectionService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.plantSectionService.getPlantSetions().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.breadCrumbItems = [
      { label: "Collaborateurs Internes" },
      { label: "Plant section", active: true },
    ];
    /**
     * fetch data
     */
    this._fetchData();
  }
  /**
   * fetches the table value
   */
  _fetchData() {
    this.hideme = new Array(this.newTable.length).fill(true);
  }
  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  /**
   * Delete Modal method
   */
  confirm(i) {
    Swal.fire({
      title: "Etes-vous sûre?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f46a6a",
      confirmButtonText: "Oui, Supprimez-le!",
      cancelButtonText: "Annuler",
    }).then((result) => {

      if (result.value) {
        this.plantSectionService.removePlantSetions(i).subscribe(
          (res:any)=>{
            console.log("plant section removed")
          }

        )
        Swal.fire("Supprimé!", "Votre utilisateur a été supprimé", "success");
      }
    });
  }
  /**
   * Open add modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { windowClass: "modal-holder" });
  }
  onEdit(plantSection: Table) {
    console.log(plantSection);
    this.selectedplantSection = plantSection;
    console.log(this.selectedplantSection);
  }
}
