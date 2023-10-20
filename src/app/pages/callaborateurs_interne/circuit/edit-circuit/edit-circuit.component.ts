import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgenceService } from "src/app/services/agence.service";
import { CircuitService } from "src/app/services/circuit.service";
@Component({
  selector: "app-edit-circuit",
  templateUrl: "./edit-circuit.component.html",
  styleUrls: ["./edit-circuit.component.scss"],
})
export class EditCircuitComponent implements OnInit {
  @Input() selectedCircuit: any;
  agenceTable: any[] = [];
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private circuitService:CircuitService
    ,private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedCircuit)
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
   
        refChemin: [this.selectedCircuit ? this.selectedCircuit.refChemin : "", [Validators.required]],
        refSap: [this.selectedCircuit ? this.selectedCircuit.refSap : "", [Validators.required]],
        nbKilometre: [this.selectedCircuit ? this.selectedCircuit.nbKilometre : "", [Validators.required]],
        contributionEmploye: [this.selectedCircuit ? this.selectedCircuit.contributionEmploye : "", [Validators.required]],
        coutKm: [this.selectedCircuit ? this.selectedCircuit.coutKm : "", [Validators.required]],
        pointArrive: [this.selectedCircuit ? this.selectedCircuit.pointArrive : "", [Validators.required]],
        selectedAgence: [this.selectedCircuit ? this.selectedCircuit.agence.id : "", [Validators.required]],
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
        id:this.selectedCircuit.id,
        refChemin:this.typeValidationForm.controls.refChemin.value,
        refSap:this.typeValidationForm.controls.refSap.value,
        nbKilometre:this.typeValidationForm.controls.nbKilometre.value,
        contributionEmploye:this.typeValidationForm.controls.contributionEmploye.value,
        coutKm:this.typeValidationForm.controls.coutKm.value,
        pointArrive:this.typeValidationForm.controls.pointArrive.value,
       
        agence:{"id":this.typeValidationForm.controls.selectedAgence.value}
       
      }
      console.log(data)
     this.circuitService.updateCircuit(data).subscribe(
        (res:any)=>{
         console.log(res)
          alert("circuit updated")
        this.modalService.dismissAll();

        }  )
    }
  }
}
