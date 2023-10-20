import { Component, OnInit } from '@angular/core';
import { PlanificationProductionService } from 'src/app/services/planification-production.service';
import { PlantSectionService } from 'src/app/services/plant-section.service';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-nv-planification',
  templateUrl: './nv-planification.component.html',
  styleUrls: ['./nv-planification.component.scss']
})
export class NvPlanificationComponent implements OnInit {
  typesubmit: boolean;
  typeValidationForm: FormGroup;
  plantSectionTable: any[] = [];
  selectedFile: File | null = null;
  constructor(private plantSectionService:PlantSectionService,private planificationProductionService:PlanificationProductionService,
    public formBuilder: FormBuilder) { }
    // Variable to store the selected "Semaine" value
    semaines = [
      { value: "KW-2023-1", label: "KW-2023-1" },
      { value: "KW-2023-2", label: "KW-2023-2" },
      { value: "KW-2023-3", label: "KW-2023-3" },
      { value: "KW-2023-4", label: "KW-2023-4" },
      { value: "KW-2023-5", label: "KW-2023-5" },
      { value: "KW-2023-6", label: "KW-2023-6" },
      { value: "KW-2023-7", label: "KW-2023-7" },
      { value: "KW-2023-8", label: "KW-2023-8" },
      { value: "KW-2023-9", label: "KW-2023-9" },
      { value: "KW-2023-10", label: "KW-2023-10" },
      { value: "KW-2023-11", label: "KW-2023-11" },
      { value: "KW-2023-12", label: "KW-2023-12" },
      { value: "KW-2023-13", label: "KW-2023-13" },
      { value: "KW-2023-14", label: "KW-2023-14" },
      { value: "KW-2023-15", label: "KW-2023-15" },
      { value: "KW-2023-16", label: "KW-2023-16" },
      { value: "KW-2023-17", label: "KW-2023-17" },
      { value: "KW-2023-18", label: "KW-2023-18" },
      { value: "KW-2023-19", label: "KW-2023-19" },
      { value: "KW-2023-20", label: "KW-2023-20" },
      { value: "KW-2023-21", label: "KW-2023-21" },
      { value: "KW-2023-22", label: "KW-2023-22" },
      { value: "KW-2023-23", label: "KW-2023-23" },
      { value: "KW-2023-24", label: "KW-2023-24" },
      { value: "KW-2023-25", label: "KW-2023-25" },
      { value: "KW-2023-26", label: "KW-2023-26" },
      { value: "KW-2023-27", label: "KW-2023-27" },
      { value: "KW-2023-28", label: "KW-2023-28" },
      { value: "KW-2023-29", label: "KW-2023-29" },
      { value: "KW-2023-30", label: "KW-2023-30" },
      { value: "KW-2023-31*", label: "KW-2023-31*" },
      { value: "KW-2023-32", label: "KW-2023-32" },
      { value: "KW-2023-33", label: "KW-2023-33" },
      { value: "KW-2023-34", label: "KW-2023-34" },
      { value: "KW-2023-35", label: "KW-2023-35" },
      { value: "KW-2023-36", label: "KW-2023-36" },
      { value: "KW-2023-37", label: "KW-2023-37" },
      { value: "KW-2023-38", label: "KW-2023-38" },
      { value: "KW-2023-39", label: "KW-2023-39" },
      { value: "KW-2023-40", label: "KW-2023-40" },
      { value: "KW-2023-41", label: "KW-2023-41" },
      { value: "KW-2023-42", label: "KW-2023-42" },
      { value: "KW-2023-43", label: "KW-2023-43" },
      { value: "KW-2023-44", label: "KW-2023-44" },
      { value: "KW-2023-45", label: "KW-2023-45" },
      { value: "KW-2023-46", label: "KW-2023-46" },
      { value: "KW-2023-47", label: "KW-2023-47" },
      { value: "KW-2023-48", label: "KW-2023-48" },
      // Add more semaine options as needed
    ];
  ngOnInit(): void {
    this.plantSectionService.getPlantSetions().subscribe((res) => {
      this.plantSectionTable.splice(0, this.plantSectionTable.length); // Clear the array
      this.plantSectionTable.push(...res); // Push the new items into the array
      console.log(this.plantSectionTable);
      //   this.newTable = res;
     
    });
    this.typeValidationForm = this.formBuilder.group(
      {
      
        selectedSemaine: ["", [Validators.required]],
      },
      {}
    );
    console.log(this.typeValidationForm.controls.selectedSemaine.value)
  }
  importplanificationProduction(){
    console.log("Selected semaine:",this.typeValidationForm.controls.selectedSemaine.value);
    console.log(this.typeValidationForm.controls.selectedSemaine.value)
    if (this.selectedFile) {
      this.planificationProductionService.importplanificationProduction(this.selectedFile,this.typeValidationForm.controls.selectedSemaine.value).subscribe(
        (res:any) => {
          console.log(res)
          console.log('planificationProduction imported successfully.');
          alert('planification Production imported successfully.');
        },
        (error) => {
        
          console.error('Error importing planificationProduction:', error);
          alert('Error importing planification Production');
        }
      );
    }
  
  }
  get type() {
    return this.typeValidationForm.controls;
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile )
  }
  typeSubmit() { 
    this.typesubmit = true;
    console.log(this.typeValidationForm.value ) 
      console.log(this.typeValidationForm.controls.selectedPlantSection.value)}
}
