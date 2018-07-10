import { NgModule } from '@angular/core';
import { Location } from '../../location/model/location';

@NgModule()

export class LeaveStatus {
    id: string;
    name: string;
    active: boolean;
    location: Location;
}