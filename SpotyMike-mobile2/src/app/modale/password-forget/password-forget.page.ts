import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRouterOutlet, IonGrid, IonRow, IonCol, IonLabel, IonIcon, IonInput, IonButton, IonSpinner} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.page.html',
  styleUrls: ['./password-forget.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonButton, IonIcon, IonLabel, IonCol, IonRow, IonGrid, IonRouterOutlet, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class PasswordForgetPage implements OnInit {

  showPassword: boolean = false;
  submitForm: boolean = false;
  error: string = '';
  private router = inject(Router);
  private firebaseService = inject(ServiceFirebaseService);
modal: any;

  constructor() {
    addIcons({ eyeOffOutline, eyeOutline,chevronBackOutline });
  }
  ngOnInit() { }
  bioSection: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
    ]),
  })
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;  // Toggle the boolean value
  }
  onSubmit() {
    if (this.bioSection.valid) {
      this.submitForm = true;
      setTimeout(async () => {
        this.submitForm = false;
        const reponse = await this.firebaseService.getExistUser(this.bioSection.value.email);
        console.log(reponse);
        if (reponse.length > 0) {
          console.log("ouioui");
        } else {
          this.error = "Email incorrecte";
        }
      }, 500)
    }
  }
}
