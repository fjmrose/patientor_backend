import patientData from '../../data/patients';
import { Patient, NoSsnPatient } from '../types';

const getPatients = (): Patient[] => {
    return patientData;
};

const getNoSsnPatients = (): NoSsnPatient[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getPatients,
    getNoSsnPatients
};