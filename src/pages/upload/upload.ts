import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-upload',
	templateUrl: 'upload.html',
})
export class UploadPage {

	imgPath;

	constructor(private fileChooser: FileChooser, public navCtrl: NavController, public navParams: NavParams) {
		this.imgPath = '../../assets/img/empty.png';
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UploadPage');
	}

	uploadImg() {
		this.fileChooser.open()
			.then(uri => console.log(uri))
			.catch(e => console.log(e));
	}
}
