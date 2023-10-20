import { Component, Input, OnInit } from "@angular/core";

// importation form
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgenceService } from "src/app/services/agence.service";
import { ChauffeurService } from "src/app/services/chauffeur.service";
@Component({
  selector: 'app-add-chauffeur',
  templateUrl: './add-chauffeur.component.html',
  styleUrls: ['./add-chauffeur.component.scss']
})
export class AddChauffeurComponent implements OnInit {
  defaultSelectedAgence: any;
  agenceTable: any[] = [];
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private chauffeurService:ChauffeurService
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
        prenom: ["", [Validators.required]],
        nom: ["", [Validators.required]],
        dateNaissance: ["", [Validators.required]],
        telephone: ["", [Validators.required]],
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
      prenom:this.typeValidationForm.controls.prenom.value,
      nom:this.typeValidationForm.controls.nom.value,
      dateNaissance:this.typeValidationForm.controls.dateNaissance.value,
      telephone:this.typeValidationForm.controls.telephone.value,
     agence:{"nom":this.typeValidationForm.controls.selectedAgence.value},
     
    }
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(data)
  this.chauffeurService.addChauffeurs(data).subscribe(
  (res:any)=>{
   console.log(res)
   alert("Chauffeur added successfully")
   this.modalService.dismissAll();
  }
  
  )
    }
  }

}
