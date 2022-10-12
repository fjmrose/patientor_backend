export interface Diagnosis {
    code: string,
    name: string,
    latin?: string
}

type Gender = 'male' | 'female' | 'non-binary';

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string
}

export type NoSsnPatient = Omit<Patient, 'ssn'>;
