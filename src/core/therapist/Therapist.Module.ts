import { Module } from '@nestjs/common';
import { TherapistDIToken } from './TherapistDIToken';
import { TherapistController } from './Therapist.Controller';
import { TherapistRepository } from './Therapist.Repository';
import { TherapistService } from './therapist.service';
@Module({
  imports: [TherapistDIToken.TherapistEntity],
  controllers: [TherapistController],
  providers: [TherapistRepository, TherapistService],
  exports: [TherapistService, TherapistRepository],
})
export class TherapistModule {}
