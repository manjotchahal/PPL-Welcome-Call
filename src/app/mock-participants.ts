import { Participant } from './participant';

export const PARTICIPANTS: Participant[] = [
    {
        Name: { FirstName: 'Test', LastName: 'User1' },
        Program: { ProgramCode: 'ABC' },
        DateOfBirth: new Date(1980,1,1),
        Ssn: '1234'
    },
    {
        Name: { FirstName: 'Test', LastName: 'User2' },
        Program: { ProgramCode: 'BCD' },
        DateOfBirth: new Date(1990,12,18),
        Ssn: '9482'
    }
];