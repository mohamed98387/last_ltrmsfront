import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SegmentService } from "src/app/services/segment.service";
@Component({
  selector: "app-add-segment",
  templateUrl: "./add-segment.component.html",
  styleUrls: ["./add-segment.component.scss"],
})
export class AddSegmentComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private segmentService:SegmentService,private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        nomSegment: ["", [Validators.required]],
        centerCoutSegment: ["", [Validators.required]],
        nomSapRef: ["", [Validators.required]],
        ps: ["Centraux", [Validators.required]],
        rhSegment: ["Mouez bougerra", [Validators.required]],
        chefSegment: ["rami ben fraj", [Validators.required]],
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
      nomSegment:this.typeValidationForm.controls.nomSegment.value,
      centerCoutSegment:this.typeValidationForm.controls.centerCoutSegment.value,
      nomSapRef:this.typeValidationForm.controls.nomSapRef.value,
      ps:this.typeValidationForm.controls.ps.value,
      rhSegment:this.typeValidationForm.controls.rhSegment.value,
      chefSegment:this.typeValidationForm.controls.chefSegment.value,
     }
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      console.log(data)
      this.segmentService.addSegment(data).subscribe(
        (res:any)=>{
          console.log(res)
          alert("segment added successfully")
          this.modalService.dismissAll();
        }
        
        )
    }
  }
}
