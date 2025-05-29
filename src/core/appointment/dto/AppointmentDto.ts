import { Expose, Type } from 'class-transformer';

export class UserDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;
}

export class AppointmentDto {
  @Expose()
  id: string;

  @Expose()
  appointmentDate: string;

  @Expose()
  startTime: string;

  @Expose()
  endTime: string;

  @Expose()
  @Type(() => UserDto)
  user: UserDto;
}
