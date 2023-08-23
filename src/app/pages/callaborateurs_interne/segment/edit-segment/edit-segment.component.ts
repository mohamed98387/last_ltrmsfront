import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SegmentService } from "src/app/services/segment.service";

@Component({
  selector: "app-edit-segment",
  templateUrl: "./edit-segment.component.html",
  styleUrls: ["./edit-segment.component.scss"],
})
export class EditSegmentComponent implements OnInit {
  @Input() selectedSegment: any;
  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder,private segmentService:SegmentService, private modalService: NgbModal) {}
  typesubmit: boolean;

  ngOnInit(): void {
    console.log(this.selectedSegment)
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        nomSegment: [this.selectedSegment ? this.selectedSegment.nomSegment : "", [Validators.required]],
        centerCoutSegment: [this.selectedSegment ? this.selectedSegment.centerCoutSegment : "", [Validators.required]],
        nomSapRef: [this.selectedSegment ? this.selectedSegment.nomSapRef : "", [Validators.required]],
        ps: [this.selectedSegment ? this.selectedSegment.ps : "", [Validators.required]],
        rhSegment: [this.selectedSegment ? this.selectedSegment.rhSegment : "", [Validators.required]],
        chefSegment: [this.selectedSegment ? this.selectedSegment.chefSegment : "", [Validators.required]],
  
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
    console.log(this.selectedSegment)
    if (this.typeValidationForm.invalid) {
      return ;
    } else {
      const data = {
        id:this.selectedSegment.id,
        nomSegment:this.typeValidationForm.controls.nomSegment.value,
        centerCoutSegment:this.typeValidationForm.controls.centerCoutSegment.value,
        nomSapRef:this.typeValidationForm.controls.nomSapRef.value,
        ps:this.typeValidationForm.controls.ps.value,
        rhSegment:this.typeValidationForm.controls.rhSegment.value,
        chefSegment:this.typeValidationForm.controls.chefSegment.value,

      }
      console.log(data)
      this.segmentService.updateSegment(data).subscribe(
        (res:any)=>{
          console.log(res)
          alert("Segment updated")
          this.modalService.dismissAll();
          window.location.reload()
        }
      )
    }
  }
}
