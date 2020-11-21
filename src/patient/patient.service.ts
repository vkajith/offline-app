import { Patient } from './patient.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel('Patient') private readonly patientModel: Model<Patient>,
  ) {}

  async insertPatient(name: string, age: number, phNumber: string) {
    const newPatient = new this.patientModel({
      name,
      age,
      phNumber,
    });

    const result = await newPatient.save();

    console.log(result);
  }

  async getPatients() {
    const patients = await this.patientModel.find().exec();
    console.log(patients);
    return patients.map((prod) => ({
      id: prod.id,
      name: prod.name,
      age: prod.age,
      phNumber: prod.phNumber,
    }));
  }
}
