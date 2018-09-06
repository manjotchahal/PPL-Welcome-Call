import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const participants = [
        {
            Name: 'Test User1',
            Program: 'ABC',
            DOB: '01/01/1980',
            LastFourSsn: '1234'
        },
        {
            Name: 'Test User2',
            Program: 'BCD',
            DOB: '12/18/1990',
            LastFourSsn: '9234'
        },
        {
            Name: 'Test User3',
            Program: 'VA DMAS',
            DOB: '12/18/1995',
            LastFourSsn: '5234'
        },
        {
            Name: 'Test User4',
            Program: 'DEF',
            DOB: '12/18/1900',
            LastFourSsn: '3234'
        }
    ];
    return {participants};
  }
}