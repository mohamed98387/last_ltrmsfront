import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PlantSectionService } from "src/app/services/plant-section.service";
@Component({
  selector: "app-add-plant-section",
  templateUrl: "./add-plant-section.component.html",
  styleUrls: ["./add-plant-section.component.scss"],
})
export class AddPlantSectionComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private plantSectionService:PlantSectionService,  private modalService: NgbModal) {}
  typesubmit: boolean;
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
  ngOnInit(): void {
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        nomPs: ["", [Validators.required]],
        descriptionPS: ["", [Validators.required]],
        emplacementPS: ["", [Validators.required]],
        psManager: ["Fethi-khlifi", [Validators.required]],
        responsableRH: ["iheb jouani", [Validators.required]],
        organisation: ["Leoni Monastir", [Validators.required]],
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
    nomPs:this.typeValidationForm.controls.nomPs.value,
    descriptionPS:this.typeValidationForm.controls.descriptionPS.value,
    emplacementPS:this.typeValidationForm.controls.emplacementPS.value,
    psManager:this.typeValidationForm.controls.psManager.value,
    responsableRH:this.typeValidationForm.controls.responsableRH.value,
    organisation:this.typeValidationForm.controls.organisation.value,
   }
   if (this.typeValidationForm.invalid) {
    return ;
  } else {
    console.log(data)
this.plantSectionService.addPlantSetions(data).subscribe(
(res:any)=>{
  console.log(res)
  this.modalService.dismissAll();
}

)
  }
  }
 
}
