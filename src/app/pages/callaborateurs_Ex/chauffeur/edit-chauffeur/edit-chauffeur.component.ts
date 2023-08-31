import { Component, Input, OnInit } from "@angular/core";

// importation form
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AgenceService } from "src/app/services/agence.service";
import { ChauffeurService } from "src/app/services/chauffeur.service";
@Component({
  selector: 'app-edit-chauffeur',
  templateUrl: './edit-chauffeur.component.html',
  styleUrls: ['./edit-chauffeur.component.scss']
})
export class EditChauffeurComponent implements OnInit {

  @Input() selectedChauffeur: any;
  agenceTable: any[] = [];
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private chauffeurService:ChauffeurService) {}
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedChauffeur)
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
   
        prenom: [this.selectedChauffeur ? this.selectedChauffeur.prenom : "", [Validators.required]],
        nom: [this.selectedChauffeur ? this.selectedChauffeur.nom : "", [Validators.required]],
        dateNaissance: [this.selectedChauffeur ? this.selectedChauffeur.dateNaissance : "", [Validators.required]],
        telephone: [this.selectedChauffeur ? this.selectedChauffeur.telephone : "", [Validators.required]],
        selectedAgence: [this.selectedChauffeur ? this.selectedChauffeur.agence.id : "", [Validators.required]],
       
       
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
        id:this.selectedChauffeur.id,
        prenom:this.typeValidationForm.controls.prenom.value,
        nom:this.typeValidationForm.controls.nom.value,
        dateNaissance:this.typeValidationForm.controls.dateNaissance.value,
        telephone:this.typeValidationForm.controls.telephone.value,
       
        agence:{"id":this.typeValidationForm.controls.selectedAgence.value}
       
      }
      console.log(data)
     this.chauffeurService.updateChauffeur(data).subscribe(
        (res:any)=>{
         console.log(res)
          alert("chauffeur updated")
         // this.modalService.dismissAll();
        //  window.location.reload()
        }  )
    }
  }

}
//update
