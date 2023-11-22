import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  imageUrl: string;
  typeValidationForm: FormGroup; 
  profileinformation: any;
  typesubmit: boolean;
  constructor(private accountService:AccountService,  public formBuilder: FormBuilder) {
    this.typeValidationForm = this.formBuilder.group({
      userName: [''],
      email: [''],
      name: [''],
      phone: [''],
      city: [''],
      organisation: ['']
    });
   }

  ngOnInit(): void {
 
 
    this.accountService.getUser().subscribe((res) => {
      console.log( res)
      this.profileinformation=res;
      console.log( this.profileinformation)
      if (this.profileinformation) {
        this.initForm();
      }
 
    });

   
  }

  private initForm(): void {
    this.typeValidationForm = this.formBuilder.group({
      userName: [this.profileinformation ? this.profileinformation.userName : ''],
      email: [this.profileinformation ? this.profileinformation.email : ''],
      name: [this.profileinformation ? this.profileinformation.name : ''],
      phone: [this.profileinformation ? this.profileinformation.phone : ''],
      city: [this.profileinformation ? this.profileinformation.city : ''],
      organisation: [this.profileinformation ? this.profileinformation.organization : ''],
    });
  }
  get type() {
    return this.typeValidationForm.controls;
  }

  typeSubmit(){
    if (this.typeValidationForm.invalid) {
      return;
    } else {
    this.typesubmit = true;
    const data = {
      id: this.profileinformation.id,
      userName: this.typeValidationForm.controls.userName.value,
      email: this.typeValidationForm.controls.email.value,
      name: this.typeValidationForm.controls.name.value,
      phone: this.typeValidationForm.controls.phone.value,
      city: this.typeValidationForm.controls.city.value,
      organization: this.typeValidationForm.controls.organisation.value,
     
    };
    console.log(data);
   this.accountService.updateuser(data).subscribe(
      (res) => {
        console.log(res);
        alert("user updated");
   
      },
      (error) => {
        console.error("Error in add role:", error);
      }
    );
    }
  }
  }

