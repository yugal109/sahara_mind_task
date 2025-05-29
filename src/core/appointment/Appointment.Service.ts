import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from './Appointment.Repository';
import { Appointment } from './entities/Appointment.Entity';
import { CreateAppointmentDto } from './dto/CreateAppointmentDto';

@Injectable()
export class AppointmentService {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async createAppointment(dto: CreateAppointmentDto): Promise<Appointment> {
    return await this.appointmentRepository.createAppointment(dto);
  }

  async findAllAppointments(): Promise<Appointment[]> {
    const appointments = await this.appointmentRepository.findAllAppointments();
    appointments.forEach((app) => {
      if (app.user) delete app.user.password;
    });
    return appointments;
  }
}
