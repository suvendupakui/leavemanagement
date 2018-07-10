import { Component } from '@angular/core';

@Component({
    selector: 'la-app',
    template: `<h1>Hello {{name}}</h1><a routerLink="/applyLeave" routerLinkActive="active">Apply Leave</a><router-outlet></router-outlet>`
})
export class AppComponent { name = 'First Angular 2 Application'; }  