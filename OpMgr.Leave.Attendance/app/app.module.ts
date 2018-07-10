import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from '../app/modules/leave/component/leave.component';

const appRoutes: Routes = [
    {
        path: 'applyLeave',
        component: LeaveComponent
    },
    {
        path: '',
        component: LeaveComponent
    }
];

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent, LeaveComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }