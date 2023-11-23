import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { AccountService } from "src/app/services/account.service";
import jwt_decode from "jwt-decode";
import { RoleService } from "src/app/services/role.service";
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
      vendredi: "05:30 13:50",
      PlantSection: "PS1",
    },
  ];
  token: string | null;
  role: string | null;
  profileinformation: any;
  roleTable:any[]=[];
  matchingRole:any;
  constructor(private accountService:AccountService,private roleService:RoleService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    if (this.token) {
      // Decode the JWT token
      const decodedToken: any = jwt_decode(this.token);
  
      // Access the data in the token
      this.role = decodedToken.roles;
  
      // Print the extracted data
      console.log(this.role[0]);
  
      this.roleService.getRoles().subscribe((res) => {
        console.log(res);
        
        // Filter the roleTable array to find the object with roleName equal to this.role[0]
        this.matchingRole = res.find(role => role.roleName === this.role[0]);
        
        // Check if a matching role was found
        if (this.matchingRole) {
   
          console.log("Matching Role:", this.matchingRole);
          
        } else {
          console.log("No matching role found.");
        }
        console.log(this.matchingRole.permissions)
      });
    }
}
hasPermission(permissions: any[], description: string): boolean {
  return permissions.some(permission => permission.description === description);
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
