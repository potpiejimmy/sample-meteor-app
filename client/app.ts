import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Parties }   from '../collections/parties';
import { Mongo }     from 'meteor/mongo';
import { DataTable } from 'primeng/primeng';
import { Column } from 'primeng/primeng';
import { MeteorComponent } from 'angular2-meteor';

@Component({
  selector: 'app',
  directives: [DataTable,Column],
  templateUrl: 'client/app.html'
})
class App extends MeteorComponent { 
  parties: Array<Object>;
  
  constructor() {
    super();
	this.autorun(() => {
		this.parties = Parties.find().fetch();
	}, true);
  }
}
 
bootstrap(App);