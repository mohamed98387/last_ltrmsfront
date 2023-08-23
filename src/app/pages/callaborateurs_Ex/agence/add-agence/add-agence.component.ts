import {Component, Input, OnInit} from '@angular/core';

// importation form
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenceService } from 'src/app/services/agence.service';
@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.scss']
})
export class AddAgenceComponent implements OnInit {

  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService, private modalService: NgbModal) { }
  typesubmit: boolean;

  ngOnInit(): void {
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      nomEntreprise: ['', [Validators.required]],
      numeroTelephone: [, [Validators.required]],
      matriculeFiscal: ['', [Validators.required]],
      horaireTravail: ['', [Validators.required]],
      email: ['', [Validators.required]],
      siteInternet: ['', [Validators.required]]
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
   console.log(this.typeValidationForm.value ) 
   const data={
    nom:this.typeValidationForm.controls.nom.value,
    adresse:this.typeValidationForm.controls.adresse.value,
    nomEntreprise:this.typeValidationForm.controls.nomEntreprise.value,
    numeroTelephone:this.typeValidationForm.controls.numeroTelephone.value,
    matriculeFiscal:this.typeValidationForm.controls.matriculeFiscal.value,
    horaireTravail:this.typeValidationForm.controls.horaireTravail.value,
    email:this.typeValidationForm.controls.email.value,
    siteInternet:this.typeValidationForm.controls.siteInternet.value,
   }
   if (this.typeValidationForm.invalid) {
    return ;
  } else {
    console.log(data)
this.agenceService.addAgence(data).subscribe(
(res:any)=>{
  console.log(res)
  this.modalService.dismissAll();
}

)
  }
  }
}
