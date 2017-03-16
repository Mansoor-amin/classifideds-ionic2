import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../providers/user-service';
import { Camera } from 'ionic-native';



@Component({
  selector: 'page-add-classifieds',
  templateUrl: 'add-classifieds.html'
})
export class AddClassifiedsPage {

  classifiedForm = this.fb.group({
    category: ["", Validators.required],
    type: ["", Validators.required],
    heading: ["", Validators.required],
    discription: ["", Validators.required],
    price: ["", Validators.required]
  });
    
    images:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    console.log(navParams.get('user'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClassifiedsPage');
  }

//   reader  = new FileReader();
//   image: string;
// convertImage(imageToUpload){
//   let rthis=this;
// if (imageToUpload.files && imageToUpload.files[0]) {
//     var FR= new FileReader();
//     FR.onload = function(e: any) {
//       rthis.image = e.target.result;
//     };       
//     FR.readAsDataURL( imageToUpload.files[0] );
//   }
// }

getPic(){
  Camera.getPicture().then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.images.push(base64Image);
 console.log(this.images);
}, (err) => {
 // Handle error
 console.log(err);
});
}

  createClassified(){
    // var data = this.classifiedForm.value;
    // data.image = this.image;
  }


}
