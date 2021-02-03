import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  locale = "fr-FR";
  rate = 2;

  constructor( private storage : Storage ) {}

  saveLocale(event){
    console.log(event.target.value);
    this.storage.set('locale', this.locale);
  }

  saveRate(event){
    
    console.log('rate : ' , this.rate );
    this.storage.set('rate', this.rate);
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
