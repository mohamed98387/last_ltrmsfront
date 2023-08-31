import { Component, Input, OnInit } from "@angular/core";

// importation form
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgenceService } from "src/app/services/agence.service";
import { VehiculeService } from "src/app/services/vehicule.service";
@Component({
  selector: "app-add-vehicule",
  templateUrl: "./add-vehicule.component.html",
  styleUrls: ["./add-vehicule.component.scss"],
})
export class AddVehiculeComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form
  agenceTable: any[] = [];
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private vehiculeService:VehiculeService
    ,private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    this.agenceService.getAgences().subscribe((res) => {
      this.agenceTable.splice(0, this.agenceTable.length); // Clear the array
      this.agenceTable.push(...res); // Push the new items into the array
      console.log(this.agenceTable);
      //   this.newTable = res;
     
    });
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        typeVehicule: ["", [Validators.required]],
        numSerie: ["", [Validators.required]],
        date: ["", [Validators.required]],
        reference: ["", [Validators.required]],
        capacite: ["", [Validators.required]],
        selectedAgence: ["", [Validators.required]],
      
      
      },
      {}
    );
  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.typeValidationForm.controls;
  }
  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
    console.log(this.typeValidationForm.value ) 
    const data={
      typeVehicule:this.typeValidationForm.controls.typeVehicule.value,
      numSerie:this.typeValidationForm.controls.numSerie.value,
      date:this.typeValidationForm.controls.date.value,
      reference:this.typeValidationForm.controls.reference.value,
      capacite:this.typeValidationForm.controls.capacite.value,
     agence:{"nom":this.typeValidationForm.controls.selectedAgence.value},
     
    }
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(data)
  this.vehiculeService.addVehicules(data).subscribe(
  (res:any)=>{
   console.log(res)
    this.modalService.dismissAll();
  }
  
  )
    }
  }
}
