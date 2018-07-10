import { NgModule } from '@angular/core';
import { Employee } from '../../employee/model/employee';
import { LeaveType } from '../model/leaveType';
import { LeaveStatus } from '../model/LeaveStatus';
import { LeaveRequest } from '../model/leaveRequest';

@NgModule()
export class LeaveSchedule {
    id: string;
    leaveRequest: LeaveRequest;
    date: Date;
    scheduleType: string;
    noOfDays: number;
    halfDetails: string;
    active: boolean;
}