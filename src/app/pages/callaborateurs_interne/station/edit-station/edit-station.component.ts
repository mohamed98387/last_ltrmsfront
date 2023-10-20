import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StationService } from "src/app/services/station.service";

@Component({
  selector: "app-edit-station",
  templateUrl: "./edit-station.component.html",
  styleUrls: ["./edit-station.component.scss"],
})
export class EditStationComponent implements OnInit {
  @Input() selectedStation: any;
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private stationService:StationService ,private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedStation)
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        refRegion: [this.selectedStation ? this.selectedStation.refRegion : "", [Validators.required]],
        refSap: [this.selectedStation ? this.selectedStation.refSap : "", [Validators.required]],
        longitude: [this.selectedStation ? this.selectedStation.longitude : "", [Validators.required]],
        latitude: [this.selectedStation ? this.selectedStation.latitude : "", [Validators.required]],
        rayon: [this.selectedStation ? this.selectedStation.rayon : "", [Validators.required]],
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
  //  console.log(this.typeValidationForm.controls.selectedAgence.value)
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(this.typeValidationForm.value)
      const data = {
        id:this.selectedStation.id,
        refRegion:this.typeValidationForm.controls.refRegion.value,
        refSap:this.typeValidationForm.controls.refSap.value,
        longitude:this.typeValidationForm.controls.longitude.value,
        latitude:this.typeValidationForm.controls.latitude.value,
        rayon:this.typeValidationForm.controls.rayon.value,
      }
      console.log(data)
     this.stationService.updateStation(data).subscribe(
        (res:any)=>{
         console.log(res)
          alert("station updated")
        this.modalService.dismissAll();

        }  )
    }
  }
}
