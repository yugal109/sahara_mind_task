import { Module } from '@nestjs/common';
import { UserModule } from './user/User.Module';
import { AuthModule } from './auth/Auth.Module';
import { TherapistModule } from './therapist/Therapist.Module';
@Module({
  imports: [UserModule, AuthModule, TherapistModule],
})
export class CoreModule {}
