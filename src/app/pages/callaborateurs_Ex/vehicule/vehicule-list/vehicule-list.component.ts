import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./vehicule-list.model";
import { tableData } from "./data-vehicule";
import { AdvancedService } from "./vehicule-list.service";
import { VehiculeListDirective, SortEvent } from "./vehicule-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { VehiculeService } from "src/app/services/vehicule.service";

@Component({
  selector: "app-vehicule-list",
  templateUrl: "./vehicule-list.component.html",
  styleUrls: ["./vehicule-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class VehiculeListComponent implements OnInit {
  addModal: NgbModal;
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  selectedvehicule: Table;
  @ViewChildren(VehiculeListDirective)
  headers: QueryList<VehiculeListDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService, private modalService: NgbModal,private vehiculeService:VehiculeService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.breadCrumbItems = [
      { label: "Collaborateurs_externes" },
      { label: "Gestion véhicule", active: true },
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
    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
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
        console.log(i)
        this.vehiculeService.removeVehicules(i).subscribe(
          (res:any)=>{
            console.log("vehicule removed")
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
  onEdit(vehicule: Table) {
    console.log(vehicule);
    this.selectedvehicule = vehicule;
    console.log(this.selectedvehicule);
  }
}
