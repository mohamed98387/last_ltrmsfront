// import { Component, OnInit } from '@angular/core';
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
  Input,
  NgModule,
} from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
// Importation pour la table
import { Table } from "./permission-list.model";
import { tableData } from "./data-permission";
import { AdvancedService } from "./permission-list.service";
import { RoleListDirective, SortEvent } from "./permission-list.directive";
// Importation pour les modals
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleService } from "src/app/services/role.service";
import { EditPermissionComponent } from "../edit-permission/edit-permission.component";
import { PermissionService } from "src/app/services/permission.service";
@Component({
  selector: "app-permission-list",
  templateUrl: "./permission-list.component.html",
  styleUrls: ["./permission-list.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})

export class PermissionListComponent implements OnInit {

selectedPermission: Table;
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
  @ViewChildren(RoleListDirective) headers: QueryList<RoleListDirective>;
  @ViewChild(EditPermissionComponent)
  editPermissionComponent: EditPermissionComponent;
  public isCollapsed = true;

  constructor(
    public service: AdvancedService,
    private modalService: NgbModal,
    private roleService: RoleService,
    private permissionService:PermissionService
  ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.roleService.getPermisions().subscribe((res) => {
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
      console.log(tableData);
      //   this.newTable = res;
      this._fetchData();
    });
    this.breadCrumbItems = [
      { label: "Administration" },
      { label: "Gestion Permissions", active: true },
    ];
    /**
     * fetch data
     */
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
      this.permissionService.removepermission(i).subscribe(
        (res: any) => {
          console.log("permission deleted succusfully");
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
  onEdit(permssion: Table) {
    console.log(permssion);
    this.selectedPermission = permssion;
    console.log(this.selectedPermission);
  //  this.editPermissionComponent.selectedPermission = this.selectedPermission;
   // console.log(this.editPermissionComponent.selectedPermission);
  }
}

