import {Component, Input, OnInit} from '@angular/core';

// importation form
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenceService } from 'src/app/services/agence.service';
@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.scss']
})
export class EditAgenceComponent implements OnInit {
  @Input() selectedagence: any;
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder, private agenceService:AgenceService, private modalService: NgbModal) { }
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedagence)
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group({
      nom: [this.selectedagence ? this.selectedagence.nom : "", [Validators.required]],
      adresse: [this.selectedagence ? this.selectedagence.adresse : "", [Validators.required]],
      nomEntreprise: [this.selectedagence ? this.selectedagence.nomEntreprise : "", [Validators.required]],
      numeroTelephone: [this.selectedagence ? this.selectedagence.numeroTelephone : "", [Validators.required]],
      matriculeFiscal: [this.selectedagence ? this.selectedagence.matriculeFiscal : "", [Validators.required]],
      horaireTravail: [this.selectedagence ? this.selectedagence.horaireTravail : "", [Validators.required]],
      email: [this.selectedagence ? this.selectedagence.email : "", [Validators.required]],
      siteInternet: [this.selectedagence ? this.selectedagence.siteInternet : "", [Validators.required]],
    }, {});
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
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(this.typeValidationForm.value)
      const data = {
        id:this.selectedagence.id,
        nom:this.typeValidationForm.controls.nom.value,
        adresse:this.typeValidationForm.controls.adresse.value,
        nomEntreprise:this.typeValidationForm.controls.nomEntreprise.value,
        numeroTelephone:this.typeValidationForm.controls.numeroTelephone.value,
        matriculeFiscal:this.typeValidationForm.controls.matriculeFiscal.value,
        horaireTravail:this.typeValidationForm.controls.horaireTravail.value,
        email:this.typeValidationForm.controls.email.value,
        siteInternet:this.typeValidationForm.controls.siteInternet.value,
      }
      console.log(data)
      this.agenceService.updateAgence(data).subscribe(
        (res:any)=>{
          console.log(res)
          alert("agence updated")
          this.modalService.dismissAll();
        //  window.location.reload()
        }
      )
    }
  }
}
