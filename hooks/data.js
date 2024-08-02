import { Colors } from "../constants/Colors";

export const data = [
    { name: 'Blood', value: 3 },
    { name: 'Emergency', value: 1 },
    { name: 'ICU', value: 5 },
    { name: 'Lab', value: 2 },
    { name: 'Lab1', value: 4 },
    { name: 'ICU1', value: 1 },
    { name: 'Lab2', value: 7 },
    { name: 'ICU2', value: 4 },
    { name: 'ICU3', value: 3 },
    { name: 'Blood', value: 4 },
];

export const services = [
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 2 },
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 7 },
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 4 },
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 3},
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 2 },
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 1 },
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 4 },
    { name: 'Ge ECG Machine', care: 'Intensive care', id: 'AG-7654312', service: 5 }
]

export const reports=[
    { name: 'Open', count: 4, color: Colors.orange },
    { name: 'Closed', count: 6, color: Colors.black },
]
