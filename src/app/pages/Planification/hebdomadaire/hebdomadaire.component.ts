import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
@Component({
  selector: "app-hebdomadaire",
  templateUrl: "./hebdomadaire.component.html",
  styleUrls: ["./hebdomadaire.component.scss"],
})
export class HebdomadaireComponent implements OnInit {
  data = [
    {
      Matricule: "10100002",
      Collaborateur: "El Fekih Sonia",
      Samedi: "repos",
      Dimanche: "repos",
      Lundi: "13:50 22:15",
      Mardi: "repos",
      Mercredi: "repos",
      Jeudi: "13:50 22:15",
      "": "05:30 13:50",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
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
