import { AppointmentStatusEnum } from '@vaika-api/typescript-client';
import { VaikaDataProvider } from './VaikaDataProvider';
import { brandApi, carApi, unwrap, appointmentApi } from '@/services/vaika-api';
import { CrupdateAppointment } from '@vaika-api/typescript-client';
import { Appointment } from '@vaika-api/typescript-client';

const transformAppointments = (appointments: Appointment[]): any[] => {
    return appointments.map(appointment => {
        return {
            id: appointment.id,
            last_name: appointment.last_name,
            first_name: appointment.first_name,
            email: appointment.email,
            contact: appointment.contact,
            message: appointment.message,
            appointment_datetime: appointment.appointment_datetime,
            status: appointment.status,
            car_id: appointment.car?.id
        };
    });
};

export const appointmentProvider: VaikaDataProvider = {
    getOne: async function (id: string, meta?: any): Promise<any> {
        return await unwrap(() => appointmentApi.getAppointmentById(id));
    },
    saveOrUpdate: async function (resources: [CrupdateAppointment], meta?: any): Promise<any> {
       const transformedResources = transformAppointments(resources);
         return await unwrap(() => appointmentApi.crupdateAppointment(transformedResources));
    },    
    delete: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
    },
    getList: async function (page?: number, perPage?: number, filter?: any, meta?: any): Promise<any[]> {
        const statusesToFetch = [
            AppointmentStatusEnum.PENDING,
            AppointmentStatusEnum.ARCHIVED,
            AppointmentStatusEnum.VALIDATED,
            AppointmentStatusEnum.REJECTED
        ];
        const promises = statusesToFetch.map(status => {
            return unwrap(() => appointmentApi.getAppointments(status));
        });
        const appointmentsArrays = await Promise.all(promises);

        const allAppointments = appointmentsArrays.flat();
    
        return allAppointments;
    }
}