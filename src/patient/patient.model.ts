import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phNumber: { type: String, required: false },
});

export interface Patient {
  id: string;
  name: string;
  age: number;
  phNumber: string;
}

export interface Patientdata {
  name: string;
  age: number;
  phNumber: string;
}
