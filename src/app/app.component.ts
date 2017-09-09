import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm // access form before submit, onSubmit doesnt need parameter
  defaultQuestion = 'teacher';  
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //     }, 
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // } ); /// set values of forms

    this.signupForm.form.patchValue({  //override certain values 
      userData: {
        username: suggestedName
      }

    });
  }

  // onSubmit(form: NgForm){
  //   console.log("submitted!")
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }
}
