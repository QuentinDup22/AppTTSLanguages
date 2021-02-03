import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  locale = "fr-FR";
  rate = 2;

  constructor( private tts: TextToSpeech,
              private clipboard: Clipboard,
              private storage : Storage, ) {}

  text2speech : string;

  copyClip(){
    this.clipboard.copy('Hello world');

  }

  speak(){
  this.tts.speak({
    text: this.text2speech,
    locale: this.locale,
    rate: this.rate,
  })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

}

stop(){
  this.tts.speak('')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}

pasteClip(){
  this.clipboard.paste().then(
    (text: string) => {
      this.text2speech = this.text2speech ? this.text2speech + '\n' + text : text;
     },
     (reject: string) => {
       console.log('Clipboard Error: ' + reject);
     }
   );

}

clear(){
  this.text2speech = "";
}

ionViewWillEnter(){
  this.storage.get('locale').then((val) => {
    console.log('Récupération du locale', val);
    if (val) this.locale = val;
  });

  this.storage.get('rate').then((val) => {
    console.log('Récupération du rate', val);
    if (val) this.rate = val;
  });
  
}

}
