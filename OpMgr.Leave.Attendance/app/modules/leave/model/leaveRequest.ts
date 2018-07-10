import { NgModule } from '@angular/core';
import { Employee } from '../../employee/model/employee';
import { LeaveType } from '../model/leaveType';
import { LeaveStatus } from '../model/LeaveStatus';

@NgModule()
export class LeaveRequest {
    id: string;
    requestDate: Date;
    leaveType: LeaveType;
    leaveStartDate: Date;
    leaveEndDate: Date;
    actualNumberOfDays: number;
    totalNumberOfDays: number;
    leaveNote: string;
    contactNumberWhileOnLeave: string;
    contactEmailWhileOnLeave: string;
    contactAddressWhileOnLeave: string;
    leaveStatus: LeaveStatus;
    active: boolean;
    leaveDebitType: string;
}