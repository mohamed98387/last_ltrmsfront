import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgenceService } from 'src/app/services/agence.service';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-gestion-planificatin-and-recap',
  templateUrl: './gestion-planificatin-and-recap.component.html',
  styleUrls: ['./gestion-planificatin-and-recap.component.scss']
})
export class GestionPlanificatinAndRecapComponent implements OnInit {
  typeValidationForm: FormGroup; // type validation form
  agenceTable: any[] = [];
  defaultSelectedAgence: any;
  constructor(public formBuilder: FormBuilder,private agenceService:AgenceService,private vehiculeService:VehiculeService) { }

  ngOnInit(): void {
    this.defaultSelectedAgence = "Default Agence";

  this.agenceService.getAgences().subscribe((res) => {
    this.agenceTable.splice(0, this.agenceTable.length); // Clear the array
    this.agenceTable.push(...res); // Push the new items into the array


    // Now, set the defaultSelectedAgence once agenceTable has data
    this.defaultSelectedAgence = this.agenceTable.length > 0 ? this.agenceTable[0].nom : "No Agences Available";
  });

  // Type validation form
  this.typeValidationForm = this.formBuilder.group({
    selectedAgence: [this.defaultSelectedAgence, [Validators.required]],
  });
  }
get(){
  console.log(this.typeValidationForm.controls)
}
}
