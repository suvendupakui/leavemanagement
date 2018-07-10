import { Component } from '@angular/core';
import { LeaveRequest } from '../model/leaveRequest';
import { NgModule } from '@angular/core';

@Component({
    selector: 'la-app',
    templateUrl: '../app/modules/leave/view/leaveApplication.html'
})
@NgModule()
export class LeaveComponent {
    leaveRequest: LeaveRequest;
} 