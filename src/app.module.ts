import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PatientModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin-list:6rNMKHjObaNkUhvp@cluster0.lhcpo.mongodb.net/offline-app?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
