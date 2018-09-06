import { Component, OnInit } from '@angular/core';
import { ParticipantForWelcomeCallQuery } from '../participantForWelcomeCallQuery';
import { PARTICIPANTS } from '../mock-participants';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-welcome-call',
  templateUrl: './welcome-call.component.html',
  styleUrls: ['./welcome-call.component.css']
})
export class WelcomeCallComponent implements OnInit {
/*   participant: Participant = {
    Name: { FirstName: 'Bob', LastName: 'John' },
    Program: [ { ProgramCode: 'ABC' } ],
    DateOfBirth: new Date(1980,1,1),
    Ssn: '1234'
  }; */

  //participants = PARTICIPANTS;

  participants: ParticipantForWelcomeCallQuery[];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(): void {
    this.participantService.getParticipants().subscribe(participants => this.participants = participants);
  }

}
