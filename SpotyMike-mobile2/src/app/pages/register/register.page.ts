import { Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonIcon, IonInput, IonButton, IonSpinner, IonDatetime,IonSelect,IonSelectOption, SelectChangeEventDetail, IonCol, IonButtons, IonItem, IonGrid, IonRow } from '@ionic/angular/standalone';
import { cellularOutline, chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-register',
  templateUrl:'./register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonItem, IonButtons, IonCol, IonDatetime, IonSpinner, IonButton, IonIcon, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInput,IonSelect,IonSelectOption]
})
export class RegisterPage implements OnInit {
  showPassword: any;
  submitForm = false;
  password: string = '';
  constructor() {

  }
  ngOnInit() {
    addIcons({ cellularOutline, chevronBackOutline });

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;  // Toggle the boolean value
  }
  private router = inject(Router);

  buttonBack() {
    this.router.navigate(['auth/login']);
  }
  bioSection: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[\W_]).*$/),
      Validators.minLength(8),
    ]),
    Firstname : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(60)
    ]),
    Lastname : new FormControl('',[
      Validators.required
    ]),
    DateBirth : new FormControl('',[
      Validators.required,
      Validators.pattern(/^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)
    ]),
    phoneNumber : new FormControl('', [
      Validators.pattern(/^([1-9](\s?\d{2}){4})|(0[1-9](\s?\d{2}){4})$/),
    ]),
    genre :new FormControl('')
  });

  onSubmit() {
    if(this.bioSection.valid){
      this.submitForm = true;
      console.log("loading...");
      console.log(this.bioSection.value);
    }
  }
}
