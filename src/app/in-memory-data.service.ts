import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const participants = [
        {
            Name: 'Test User1',
            Program: 'ABC',
            DOB: '01/01/1980',
            LastFourSsn: '1234',
            TimeInSystemWithoutAttempt: '1 day (12 hrs)',
            TimeInSystem: '1 day (12 hrs)',
            OutreachAttempts: '0',
            StartedEnrollment: 'No'
        },
        {
            Name: 'Test User2',
            Program: 'BCD',
            DOB: '12/18/1990',
            LastFourSsn: '9234',
            TimeInSystemWithoutAttempt: 'n/a',
            TimeInSystem: '5 days (128 hrs)',
            OutreachAttempts: '2',
            StartedEnrollment: 'Yes'
        },
        {
            Name: 'Test User3',
            Program: 'VA DMAS',
            DOB: '12/18/1995',
            LastFourSsn: '5234',
            TimeInSystemWithoutAttempt: 'n/a',
            TimeInSystem: '10 days (244 hrs)',
            OutreachAttempts: '4',
            StartedEnrollment: 'Yes'
        },
        {
            Name: 'Test User4',
            Program: 'DEF',
            DOB: '12/18/1900',
            LastFourSsn: '3234',
            TimeInSystemWithoutAttempt: '2 days (36 hrs)',
            TimeInSystem: '2 days (36 hrs)',
            OutreachAttempts: '0',
            StartedEnrollment: 'No'
        }
    ];
    return {participants};
  }
}