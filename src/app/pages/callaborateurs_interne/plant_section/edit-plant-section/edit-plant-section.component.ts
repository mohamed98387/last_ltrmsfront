import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PlantSectionService } from "src/app/services/plant-section.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
@Component({
  selector: "app-edit-plant-section",
  templateUrl: "./edit-plant-section.component.html",
  styleUrls: ["./edit-plant-section.component.scss"],
})
export class EditPlantSectionComponent implements OnInit {
  @Input() selectedplantSection: any;
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private plantSectionService:PlantSectionService, private modalService: NgbModal
    ,private location: Location,  private router: Router) {}
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedplantSection)
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        nomPs: [this.selectedplantSection ? this.selectedplantSection.nomPs : "", [Validators.required]],
        descriptionPS: [this.selectedplantSection ? this.selectedplantSection.descriptionPS : "", [Validators.required]],
        emplacementPS: [this.selectedplantSection ? this.selectedplantSection.emplacementPS : "", [Validators.required]],
        psManager: [this.selectedplantSection ? this.selectedplantSection.psManager : "", [Validators.required]],
        responsableRH: [this.selectedplantSection ? this.selectedplantSection.responsableRH : "", [Validators.required]],
        organisation: [this.selectedplantSection ? this.selectedplantSection.organisation : "", [Validators.required]],
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
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(this.typeValidationForm.value)
      const data = {
        id:this.selectedplantSection.id,
        nomPs:this.typeValidationForm.controls.nomPs.value,
        descriptionPS:this.typeValidationForm.controls.descriptionPS.value,
        emplacementPS:this.typeValidationForm.controls.emplacementPS.value,
        psManager:this.typeValidationForm.controls.psManager.value,
        responsableRH:this.typeValidationForm.controls.responsableRH.value,
        organisation:this.typeValidationForm.controls.organisation.value,

      }
      console.log(data)
      this.plantSectionService.updatePlantSetions(data).subscribe(
        (res:any)=>{
          console.log(res)
          alert("plant section updated")
          this.modalService.dismissAll();
          window.location.reload()
        }
      )
    }
  }
}
//update
