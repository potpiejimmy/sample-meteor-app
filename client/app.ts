import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Parties }   from '../collections/parties';
import { Mongo }     from 'meteor/mongo';
import { DataTable } from 'primeng/primeng';
import { Column } from 'primeng/primeng';
import { MeteorComponent } from 'angular2-meteor';
import { Button } from 'primeng/primeng';
import { Dialog } from 'primeng/primeng';
import { InputText } from 'primeng/primeng';


@Component({
  selector: 'app',
  directives: [DataTable,Column,Button,Dialog,InputText],
  templateUrl: 'client/app.html'
})
class App extends MeteorComponent { 
  parties: Array<Object>;
  currentParty: Object;
  displayDialog: boolean;
  
  constructor() {
    super();
    this.displayDialog = false;
    this.autorun(() => {
      this.parties = Parties.find().fetch();
    }, true);
  }

  onRowSelect(event) {
      this.currentParty = event.data;
      this.displayDialog = true;
  }

  save() {
      this.currentParty = null;
      this.displayDialog = false;
  }
  
  delete() {
      this.currentParty = null;
      this.displayDialog = false;
  }    
  
}
 
bootstrap(App);