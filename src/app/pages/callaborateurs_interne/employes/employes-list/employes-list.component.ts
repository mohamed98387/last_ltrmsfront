import { OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./employes-list.model";
import { tableData } from "./data-employes-list";
import { AdvancedService } from "./employes-list.service";
import {
  PlantSectionListDirective,
  SortEvent,
} from "./employes-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { __param } from "tslib";
import { EmployeService } from "src/app/services/employe.service";
@Component({
  selector: "app-employes-list",
  templateUrl: "./employes-list.component.html",
  styleUrls: ["./employes-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class EmployesListComponent implements OnInit {
  selectedFile: File | null = null;
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
  data = [
    { Matricule: "10102521", Collaborateur: "Hanen Dridi", NOM: "Hanen" , PRENOM: "Dridi", COST_CENTER: 4594, SUBAREA: "LTN1", REGION: "Sbikha/3002/4023", SEGMENT: "Segment 72-1", Contremaitre: "Ommezzine Ahmed", GROUPE: "G-073-15", NATURE: "Direct"},
    { Matricule: "10102858", Collaborateur: "Khchini Seifeddine", NOM: "Khchini", PRENOM: "Seifeddine", COST_CENTER: 4580 , SUBAREA: "LTN1", REGION: "Sbikha/3002/4023", SEGMENT: "Cutting & WPA AUDI", Contremaitre: "Brahmi Abdelwaheb", GROUPE: "G-073-15", NATURE: "Direct"},
    { Matricule: "10103507", Collaborateur: "HAMDENI NEBIHA", NOM: "HAMDENI" , PRENOM: "NEBIHA", COST_CENTER: 4766, SUBAREA: "LTN1", REGION: "Sbikha/3002/4023", SEGMENT: "Segment 96", Contremaitre: "Boukamcha Houssem", GROUPE: "G-073-15", NATURE: "Direct"},
  ];

  @ViewChildren(PlantSectionListDirective)
  headers: QueryList<PlantSectionListDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService, private modalService: NgbModal,private modalServicetwo: NgbModal,private employeeService:EmployeService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.breadCrumbItems = [
      { label: "Collaborateurs Internes" },
      { label: "Employes", active: true },
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
    this.modalServicetwo.open(content, { windowClass: "modal-holder" });
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
  importEmployees(){
    if (this.selectedFile) {
      this.employeeService.importEmployees(this.selectedFile).subscribe(
        (res:any) => {
          console.log(res)
          console.log('Employees imported successfully.');
        },
        (error) => {
        
          console.error('Error importing employees:', error);
        }
      );
    }
  
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile )
  }

}
