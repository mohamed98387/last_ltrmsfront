import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from '@fullcalendar/daygrid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenceService } from 'src/app/services/agence.service';
import { PlanificationTransportService } from 'src/app/services/planification-transport.service';
import { VehiculeService } from 'src/app/services/vehicule.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-gestion-planificatin-and-recap',
  templateUrl: './gestion-planificatin-and-recap.component.html',
  styleUrls: ['./gestion-planificatin-and-recap.component.scss']
})
export class GestionPlanificatinAndRecapComponent implements OnInit {
  selectedFile: File | null;
  tableData = [
    { agence: "agence1", circuit: 'monastir', debut_Poste: 1350 ,fin_Poste: 1350,nombre_Employe:2,nombre_bus:2 ,jour_Semaine :"samedi"},
    { agence: "agence1", circuit: 'monastir', debut_Poste: 530 ,fin_Poste: 2250,nombre_Employe:2,nombre_bus:2 ,jour_Semaine :"samedi"},
    // Add more data as needed
  ];
  TableFiltred= [
  
  ];
  afficher:boolean=false;
  typeValidationForm: FormGroup; // type validation form
  agenceTable: any[] = [];
  defaultSelectedAgence: any;
  defaultSelectedAgenceMail:any;
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private vehiculeService:VehiculeService
    ,private planificationTransportService:PlanificationTransportService,private modalServicetwo: NgbModal) { }

  ngOnInit(): void {
    this.afficher=false;
    this.planificationTransportService.lisFinalPlanificationTransports().subscribe((res) => {
      this.tableData.splice(0,  this.tableData.length); // Clear the array
      this.tableData.push(...res); // Push the new items into the array
      console.log( this.tableData);
      //   this.newTable = res;
      
    });
    this.defaultSelectedAgence = "Default Agence";

  this.agenceService.getAgences().subscribe((res) => {
    this.agenceTable.splice(0, this.agenceTable.length); // Clear the array
    this.agenceTable.push(...res); // Push the new items into the array

console.log
    // Now, set the defaultSelectedAgence once agenceTable has data
    this.defaultSelectedAgence = this.agenceTable.length > 0 ? this.agenceTable[0].nom : "No Agences Available";
  });

  // Type validation form
  this.typeValidationForm = this.formBuilder.group({
    selectedAgence: [this.defaultSelectedAgence, [Validators.required]],
    selectedAgenceMail: [this.defaultSelectedAgenceMail, [Validators.required]],
  });
  }
get(){
  console.log(this.typeValidationForm.controls)
}
calcul(){
  console.log(this.typeValidationForm.controls.selectedAgence.value)

  this.planificationTransportService.addplanificationtransport(this.typeValidationForm.controls.selectedAgence.value).subscribe(
    (res:any)=>{
      
      alert("calculation done")
    
     }
  )
}
generation(){
 // console.log(this.typeValidationForm.controls.selectedAgence.value)

  this.planificationTransportService.newlPlanificationTransport(this.typeValidationForm.controls.selectedAgence.value).subscribe(
    (res:any)=>{
      
      alert("generation planification done")
      window.location.reload();
     }
  )
}
exportToExcel(): void {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tableData);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'table_data.xlsx');

}
exportToExceltwo(): void {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.TableFiltred);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'table_data.xlsx');

}
openModal(content: any) {
  this.modalServicetwo.open(content, { windowClass: "modal-holder" });
 

}
test(){
 
  this.TableFiltred = this.tableData.filter(item => item.agence === this.typeValidationForm.controls.selectedAgenceMail.value);
  console.log(this.TableFiltred);
}
testTwo(){
this.afficher=true;
console.log(this.afficher)
}
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}
envoyer(){
  if (this.selectedFile) {
    const formData = new FormData();
    console.log(this.selectedFile)
    console.log(this.typeValidationForm.controls.selectedAgenceMail.value)
      formData.append('file', this.selectedFile);
  this.planificationTransportService.sendPlanificationTransport(this.typeValidationForm.controls.selectedAgenceMail.value,formData).subscribe((res) => {

   alert('Email envoyé avec succès');
   window.location.reload();

  }
  ,
        (error) => {
          alert('Email envoyé avec succès');
   window.location.reload();
        });
  }else{
    console.log('Aucun fichier sélectionné');
  }

}

}
