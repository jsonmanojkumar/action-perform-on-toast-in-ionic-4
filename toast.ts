import { ToastController } from '@ionic/angular';  
import { Router } from '@angular/router';



 constructor(
 private router: Router,
 public toastController:ToastController
            ) 




async presentToastWithOptions(msg:any) {
    const toast = await this.toastController.create({
      // header: 'Toast header',
      message: msg,
      position: 'middle',
      buttons: [
        {
          side: 'start',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.router.navigate(['/user']);
          }
        },
        {
          side: 'end',
          // icon: 'star',
          text: 'OK',
          handler: () => {
            console.log('Favorite clicked');
            this.router.navigate(['/home']);
          }
        }
        
      ]
    });
    toast.present();
  }