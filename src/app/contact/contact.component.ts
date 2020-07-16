import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validator, Validators,FormControl} from '@angular/forms';
//import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',]
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
submitted=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10)]],
      message:['',Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

 
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

resetForm(){
  this.registerForm.reset();
}
}
