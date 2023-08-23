import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./segment-list.model";
import { tableData } from "./data-segment-list";
import { AdvancedService } from "./segment-list.service";
import { PlantSectionListDirective, SortEvent } from "./segment-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SegmentService } from "src/app/services/segment.service";

@Component({
  selector: "app-segment-list",
  templateUrl: "./segment-list.component.html",
  styleUrls: ["./segment-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class SegmentListComponent implements OnInit {
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
  @ViewChildren(PlantSectionListDirective)
  headers: QueryList<PlantSectionListDirective>;
  public isCollapsed = true;
  selectedSegment: Table;
  constructor(public service: AdvancedService, private modalService: NgbModal,private segmentService:SegmentService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.segmentService.getSegments().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.breadCrumbItems = [
      { label: "Collaborateurs Internes" },
      { label: "Segment", active: true },
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
        this.segmentService.removeSegment(i).subscribe(
          (res:any)=>{
            console.log("segment removed")
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
  onEdit(segment: Table) {
    console.log(segment);
    this.selectedSegment = segment;
    console.log(this.selectedSegment);
  }
}
