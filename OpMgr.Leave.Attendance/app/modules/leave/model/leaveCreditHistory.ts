import { NgModule } from '@angular/core';
import { Employee } from '../../employee/model/employee';
import { LeaveType } from '../model/leaveType';
import { LeaveStatus } from '../model/LeaveStatus';

@NgModule()
export class LeaveCreditHistory {
    id: string;
    employee: Employee;
    leaveType: LeaveType;
    numberOfDays: number;
    creditedDate: Date;
    active: boolean;
    financialYearStartDate: Date;
    financialYearEndDate: Date;
    actualYearStartDate: Date;
    actualYearEndDate: Date;
    canBeCarriedFwd: boolean;
    isDiscarded: boolean;
}