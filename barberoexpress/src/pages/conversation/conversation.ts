import { User } from './../interfaces/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  friend: User;  
  friends: User[];
  price: number = 78.1231312312;
  today: any = Date.now();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friend = this.navParams.get('user');  
    let friendId = this.friend.uid;    
    this.friends = this.navParams.get('users');
    console.log("User", this.friend);
    console.log("UserID", friendId);
    console.log("Users", this.friends);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
