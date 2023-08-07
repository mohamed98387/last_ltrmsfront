import { Component, Input, OnInit } from "@angular/core";

// importation form
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-add-chauffeur',
  templateUrl: './add-chauffeur.component.html',
  styleUrls: ['./add-chauffeur.component.scss']
})
export class AddChauffeurComponent implements OnInit {

  typeValidationForm: FormGroup; // type validation form
  constructor(public formBuilder: FormBuilder) {}
  typesubmit: boolean;

  ngOnInit(): void {
    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group(
      {
        text: ["", [Validators.required]],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          ],
        ],
        url: ["", [Validators.required, Validators.pattern("https?://.+")]],
        digits: ["", [Validators.required, Validators.pattern("[0-9]+")]],
        number: ["", [Validators.required, Validators.pattern("[0-9]+")]],
        alphanum: [
          "",
          [Validators.required, Validators.pattern("[a-zA-Z0-9]+")],
        ],
        textarea: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmpwd: ["", Validators.required],
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
  }

}
