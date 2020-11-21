import { PatientSchema } from './patient.model';
import { Module } from "@nestjs/common";
import { PatientController } from "./patient.controller";
import { PatientService } from "./patient.service";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports : [MongooseModule.forFeature([{name: 'Patient', schema : PatientSchema}]),],
    controllers: [PatientController],
    providers: [ PatientService ],
})
export class PatientModule{}