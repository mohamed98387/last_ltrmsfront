import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgenceService } from "src/app/services/agence.service";
import { CircuitService } from "src/app/services/circuit.service";

@Component({
  selector: "app-add-circuit",
  templateUrl: "./add-circuit.component.html",
  styleUrls: ["./add-circuit.component.scss"],
})
export class AddCircuitComponent implements OnInit {
  defaultSelectedAgence: any;
  agenceTable: any[] = [];
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private circuitService:CircuitService
    ,private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    this.agenceService.getAgences().subscribe((res) => {
      this.agenceTable.splice(0, this.agenceTable.length); // Clear the array
      this.agenceTable.push(...res); // Push the new items into the array
      console.log(this.agenceTable);
      //   this.newTable = res;
      this.defaultSelectedAgence = this.agenceTable[0].nom ;
    });
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        refChemin: ["", [Validators.required]],
        refSap: ["", [Validators.required]],
        nbKilometre: ["", [Validators.required]],
        contributionEmploye: ["", [Validators.required]],
        coutKm: ["", [Validators.required]],
        pointArrive: ["", [Validators.required]],
        selectedAgence: [ this.defaultSelectedAgence, [Validators.required]],
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
    const data={
      refChemin:this.typeValidationForm.controls.refChemin.value,
      refSap:this.typeValidationForm.controls.refSap.value,
      nbKilometre:this.typeValidationForm.controls.nbKilometre.value,
      contributionEmploye:this.typeValidationForm.controls.contributionEmploye.value,
      coutKm:this.typeValidationForm.controls.coutKm.value,
      pointArrive:this.typeValidationForm.controls.pointArrive.value,
     agence:{"nom":this.typeValidationForm.controls.selectedAgence.value},
     
    }
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(data)
  this.circuitService.addCircuit(data).subscribe(
  (res:any)=>{
   console.log(res)
   alert("circuit added")
   this.modalService.dismissAll();
  }
  
  )
    }
  }
}
