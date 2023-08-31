import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./chauffeur-list.model";
import { tableData } from "./data-chauffeur";
import { AdvancedService } from "./chauffeur-list.service";
import { ChauffeurListDirective, SortEvent } from "./chauffeur-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ChauffeurService } from "src/app/services/chauffeur.service";

@Component({
  selector: "app-chauffeur-list",
  templateUrl: "./chauffeur-list.component.html",
  styleUrls: ["./chauffeur-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class ChauffeurListComponent implements OnInit {
  addModal: NgbModal;
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  selectedChauffeur:Table;
  @ViewChildren(ChauffeurListDirective)
  headers: QueryList<ChauffeurListDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService, private modalService: NgbModal,private chauffeurService:ChauffeurService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.chauffeurService.getChauffeurs().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.breadCrumbItems = [
      { label: "Collaborateurs_externes" },
      { label: "Gestion Chauffeur", active: true },
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
        this.chauffeurService.removeChauffeurs(i).subscribe(
          (res:any)=>{
            console.log("chauffeur removed")
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
  onEdit(chauffeur: Table) {
    console.log(chauffeur);
    this.selectedChauffeur = chauffeur;
    console.log(this.selectedChauffeur);
  }
}
