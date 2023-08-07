// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./role-list.model";
import { tableData } from "./data-role";
import { AdvancedService } from "./role-list.service";
import { RoleListDirective, SortEvent } from "./role-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleService } from "src/app/services/role.service";

@Component({
  selector: "app-role-list",
  templateUrl: "./role-list.component.html",
  styleUrls: ["./role-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class RoleListComponent implements OnInit {
  //
  addModal: NgbModal;
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  newTable: any[] = [];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  selectedRole: Table;
  @ViewChildren(RoleListDirective) headers: QueryList<RoleListDirective>;
  public isCollapsed = true;

  constructor(
    public service: AdvancedService,
    private modalService: NgbModal,
    public roleService: RoleService
  ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.roleService.getRoles().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.roleService.getPermisions().subscribe((res) => {
      console.log("Permision: ", res);
    });
    this.breadCrumbItems = [
      { label: "Administration" },
      { label: "Gestion Rôles", active: true },
    ];
    /**
     * fetch data
     */
  }
  /**
   * fetches the table value
   */
  _fetchData() {
    /*  this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }*/
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
      this.roleService.removeRole(i).subscribe(
        (res: any) => {
          console.log("role deleted succusfully");
          console.log(res)
        },
        (error) => {
          console.log(error);
        }
      );
      if (result.value) {
        Swal.fire("Supprimé!", "Votre donnée a été supprimé", "success");
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
  onEdit(role: Table) {
    console.log(role);
    this.selectedRole = role;
    console.log(this.selectedRole);
  }
}
