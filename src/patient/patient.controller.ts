import { PatientService } from './patient.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Patientdata } from './patient.model';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async getAllPatients() {
      const patients = await this.patientService.getPatients();
      return patients;
  }

  @Post()
  addPatient(@Body() patient: Patientdata) {
    this.patientService.insertPatient(
      patient.name,
      patient.age,
      patient.phNumber,
    );
  }
}
