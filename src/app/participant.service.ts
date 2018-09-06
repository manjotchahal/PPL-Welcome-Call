import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Participant } from './participant';
//import { PARTICIPANTS } from './mock-participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private participantsUrl = 'api/participants'; // URL to web api
  //private participantsUrl = 'http://localhost:58782/api/Participants'; // URL to web api

  constructor(private http: HttpClient) { }

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.participantsUrl)
  }
}
