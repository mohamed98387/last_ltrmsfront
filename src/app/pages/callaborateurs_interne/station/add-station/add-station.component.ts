import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StationService } from "src/app/services/station.service";

@Component({
  selector: "app-add-station",
  templateUrl: "./add-station.component.html",
  styleUrls: ["./add-station.component.scss"],
})
export class AddStationComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private stationService:StationService, private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        refRegion: ["", [Validators.required]],
        refSap: ["", [Validators.required]],
        longitude: ["", [Validators.required]],
        latitude: ["", [Validators.required]],
        rayon: ["", [Validators.required]],
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
      refRegion:this.typeValidationForm.controls.refRegion.value,
      refSap:this.typeValidationForm.controls.refSap.value,
      longitude:this.typeValidationForm.controls.longitude.value,
      latitude:this.typeValidationForm.controls.latitude.value,
      rayon:this.typeValidationForm.controls.rayon.value,
 
     
    }
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(data)
  this.stationService.addStation(data).subscribe(
  (res:any)=>{
   console.log(res)
   alert("station added")
   this.modalService.dismissAll();
  }
  
  )
    }
  }
}
