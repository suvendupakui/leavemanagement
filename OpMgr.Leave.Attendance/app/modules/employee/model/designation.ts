import { NgModule } from '@angular/core';
import { Location } from '../../location/model/location';

@NgModule()
export class Designation {
    id: string;
    name: string;
    active: boolean;
    location: Location;
    isLeaveApplicable: boolean;
}