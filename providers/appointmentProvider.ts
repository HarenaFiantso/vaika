import { AppointmentStatusEnum } from '@vaika-api/typescript-client';
import { VaikaDataProvider } from './VaikaDataProvider';
import { brandApi, carApi, unwrap, appointmentApi } from '@/services/vaika-api';
import { CrupdateAppointment } from '@vaika-api/typescript-client';

export const appointmentProvider: VaikaDataProvider = {
    getOne: async function (id: string, meta?: any): Promise<any> {
        return await unwrap(() => appointmentApi.getAppointmentById(id));
    },
    saveOrUpdate: async function (resources: CrupdateAppointment, meta?: any): Promise<any> {
        return await unwrap(() => appointmentApi.crupdateAppointment([resources]));
    },
    delete: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
    },
    getList: async function (page?: number, perPage?: number, filter?: any, meta?: any): Promise<any[]> {
        const appointments = await unwrap(() => appointmentApi.getAppointments(AppointmentStatusEnum.PENDING || AppointmentStatusEnum.ARCHIVED || AppointmentStatusEnum.REJECTED || AppointmentStatusEnum.VALIDATED));
        return appointments;
    }
}