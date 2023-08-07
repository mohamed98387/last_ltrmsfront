import { OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./station-list.model";
import { tableData } from "./data-station-list";
import { AdvancedService } from "./station-list.service";
import { PlantSectionListDirective, SortEvent } from "./station-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

@Component({
  selector: "app-station-list",
  templateUrl: "./station-list.component.html",
  styleUrls: ["./station-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class StationListComponent implements OnInit {
  addModal: NgbModal;
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  data = [
    { name: "John", age: 30, email: "john@example.com" },
    { name: "Jane", age: 25, email: "jane@example.com" },
    { name: "Bob", age: 40, email: "bob@example.com" },
  ];

  @ViewChildren(PlantSectionListDirective)
  headers: QueryList<PlantSectionListDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService, private modalService: NgbModal) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Collaborateurs Internes" },
      { label: "Stations", active: true },
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
  confirm() {
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
  content: any = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];
  array: any = [];
  file() {
    for (let i = 0; i < this.content.length; i++) {
      var o;
      var newArray: any = [];
      for (o in this.content[i]) {
        newArray.push(o);
      }
      break;
    }
    this.array.push(newArray);
    for (let i = 0; i < this.content.length; i++) {
      this.array.push(Object.values(this.content[i]));
    }
    var CsvString = "";
    this.array.forEach((RowItem: any, RowIndex: any) => {
      RowItem.forEach((colItem: any, colIndex: any) => {
        CsvString += colItem + ",";
      });
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv, " + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString);
    x.setAttribute("download", "somedata.csv");
    document.body.appendChild(x);
    x.click();
    this.array = [];
  }
  exportToExcel(data: any[], fileName: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, fileName);
  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const blob: Blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, fileName + "_" + new Date().getTime() + ".xlsx");
  }
}
