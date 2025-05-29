import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentService } from './Appointment.Service';
import { CreateAppointmentDto } from './dto/CreateAppointmentDto';
import { Appointment } from './entities/Appointment.Entity';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  async get(): Promise<Appointment[]> {
    return this.appointmentService.findAllAppointments();
  }

  @Post()
  async create(@Body() dto: CreateAppointmentDto): Promise<Appointment> {
    return this.appointmentService.createAppointment(dto);
  }
}
