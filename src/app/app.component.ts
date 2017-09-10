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
  user= {  // make sure it's equal sign...
    username: '', 
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({   // set whole form 
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

  submittedProperty = false;

  // onSubmit(form: NgForm){
  //   console.log("submitted!")
  //   console.log(form);
  // }

  onSubmit(){
    this.submittedProperty = true;


    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    //console.log(this.signupForm);
  }
}
