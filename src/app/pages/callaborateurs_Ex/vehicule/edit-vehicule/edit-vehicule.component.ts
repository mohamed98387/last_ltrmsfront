import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgenceService } from "src/app/services/agence.service";
import { VehiculeService } from "src/app/services/vehicule.service";

@Component({
  selector: "app-edit-vehicule",
  templateUrl: "./edit-vehicule.component.html",
  styleUrls: ["./edit-vehicule.component.scss"],
})
export class EditVehiculeComponent implements OnInit {
  @Input() selectedvehicule: any;
  typeValidationForm: FormGroup; // type validation form
  agenceTable: any[] = [];
  selected = "option2";
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService, private modalService: NgbModal,private vehiculeService:VehiculeService) {}
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedvehicule.agence)
    this.agenceService.getAgences().subscribe((res) => {
      this.agenceTable.splice(0, this.agenceTable.length); // Clear the array
      this.agenceTable.push(...res); // Push the new items into the array
      console.log(this.agenceTable);
      //   this.newTable = res;
     
    });
console.log(this.selectedvehicule)
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        typeVehicule: [this.selectedvehicule ? this.selectedvehicule.typeVehicule : "", [Validators.required]],
        numSerie: [this.selectedvehicule ? this.selectedvehicule.numSerie : "", [Validators.required]],
        date: [this.selectedvehicule ? this.selectedvehicule.date : "", [Validators.required]],
        reference: [this.selectedvehicule ? this.selectedvehicule.reference : "", [Validators.required]],
        capacite: [this.selectedvehicule ? this.selectedvehicule.capacite : "", [Validators.required]],
        selectedAgence: [this.selectedvehicule ? this.selectedvehicule.agence.id : "", [Validators.required]],
        
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
    console.log(this.typeValidationForm.controls.selectedAgence.value)
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(this.typeValidationForm.value)
      const data = {
        id:this.selectedvehicule.id,
        typeVehicule:this.typeValidationForm.controls.typeVehicule.value,
        numSerie:this.typeValidationForm.controls.numSerie.value,
        date:this.typeValidationForm.controls.date.value,
        reference:this.typeValidationForm.controls.reference.value,
        capacite:this.typeValidationForm.controls.capacite.value,
        agence:{"id":this.typeValidationForm.controls.selectedAgence.value}
       
      }
      console.log(data)
      this.vehiculeService.updateVehicule(data).subscribe(
        (res:any)=>{
          console.log(res)
          alert("vehicule updated")
          this.modalService.dismissAll();
        //  window.location.reload()
        }
      )
    }
  }
}
