import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Parties }   from '../collections/parties';
import { Mongo }     from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { DataTable, Column, Button, Dialog, InputText, Fieldset } from 'primeng/primeng';

@Component({
  selector: 'app',
  directives: [DataTable, Column, Button, Dialog, InputText, Fieldset],
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

  showDialogToAdd() {
      this.currentParty = new Object();
      this.displayDialog = true;
  }
    
  onRowSelect(event) {
      console.log("row select");
      this.currentParty = this.cloneObject(event.data);
      this.displayDialog = true;
  }

  save() {
      console.log("save: " + JSON.stringify(this.currentParty));
      if (this.currentParty["_id"]) {
        Parties.update(this.currentParty["_id"], this.currentParty);
      } else {
        Parties.insert(this.currentParty);
      }
      this.cancel();
  }
  
  delete() {
      if (this.currentParty["_id"]) {
        Parties.remove(this.currentParty["_id"]);
      }
      this.cancel();
  }
  
  cancel() {
      this.currentParty = null;
      this.displayDialog = false;
  }
  
  cloneObject(o: Object): Object {
        let obj = new Object();
        for(let prop in o) {
            obj[prop] = o[prop];
        }
        return obj;
    }
}
 
bootstrap(App);