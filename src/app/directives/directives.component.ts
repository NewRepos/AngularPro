import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: `app/directives/directives.component.html`,
  styleUrls: ["app/directives/directives.component.css"]
})
export class directivesComponent  { 

    abc: any[] = [ {
        "ID": "1",
        "Name" : "One"
     },
  
     {
        "ID": "2",
        "Name" : "Two"
     } ];
     appStatus: boolean = true;
 }
