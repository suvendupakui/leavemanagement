import { NgModule } from '@angular/core';
import { Location } from '../../location/model/location';

@NgModule()

export class Employee {
    employeeId: string;
    active: boolean;
    firstName: string;
    middleName: string;
    lastName: string;
    officeEmail: string;
    personalEmail: string;
    primaryContactNumber: string;
    alternateContactNumber: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    city: string;
    state: string;
    pincode: string;
    location: Location;
    currentOrganizationJoiningDate: Date;
    careerStartDate: Date;
    dateOfBirth: Date;
    bloodGroup: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    isLeaveApplicable: boolean;
}