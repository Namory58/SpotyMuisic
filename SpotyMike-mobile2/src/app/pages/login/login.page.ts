import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { User } from './../../core/interfaces/users';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule,} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonInput, IonItem, IonLabel, IonButton, IonText, IonIcon, ModalController, IonSpinner } from '@ionic/angular/standalone';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import {PasswordForgetPage } from'../../modale/password-forget/password-forget.page'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonIcon, IonText, IonButton, IonLabel, IonItem, IonInput, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {
[x: string]: any;


  showPassword: boolean = false;
  password: string = '';
  email : string ='';
  submitForm = false;
  error:string ='';
  private router =inject(Router);
  private firebaseService= inject(ServiceFirebaseService);

  constructor(private modalCtrl: ModalController) {
    addIcons({eyeOffOutline,eyeOutline});
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

  });
  onSubmit(){
    if (this.bioSection.valid) {
        this.submitForm = true;
        setTimeout(async () => {
        this.submitForm = false; // Cachez l'indicateur de chargement après le délai
          const reponse = await this.firebaseService.getUsers(this.bioSection.value.email, this.bioSection.value.password);
          if(reponse.length>0){
            //todo add localStorage....
            this.router.navigate(['home/home']);
          }else{
            this.error = "Email or password incorrect";
          }
        }, 2000);
    }
  }
  async openModalpasswordForgot(){
    const modal = await this.modalCtrl.create({
      component:PasswordForgetPage,
    });
    modal.present();
  }
  createAcount(){
    this.router.navigate(['auth/register']);
  }
  ngOnInit() {
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;  // Toggle the boolean value
  }

}
