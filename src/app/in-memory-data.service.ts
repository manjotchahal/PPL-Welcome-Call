import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const participants = [
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
        },
        {
            Name: { FirstName: 'Test', LastName: 'User3' },
            Program: { ProgramCode: 'VA DMAS' },
            DateOfBirth: new Date(1995,12,18),
            Ssn: '5282'
        },
        {
            Name: { FirstName: 'Test', LastName: 'User4' },
            Program: { ProgramCode: 'DEF' },
            DateOfBirth: new Date(1900,12,18),
            Ssn: '3782'
        }
    ];
    return {participants};
  }
}