import { Component, OnInit } from '@angular/core';
import { ParticipantForWelcomeCallQuery } from '../participantForWelcomeCallQuery';
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
  filteredParticipants: ParticipantForWelcomeCallQuery[];
  selectedOutreach: string;
  selectedEnrollment: string;
  
  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getParticipants();
    this.selectedOutreach = 'all';
    this.selectedEnrollment = 'all';
  }

  getParticipants(): void {
    this.participantService.getParticipants().subscribe(participants => this.participants = this.filteredParticipants = participants);
  }

  onOptionsSelected(selectedOutreach, selectedEnrollment) {
    switch (selectedOutreach){
      case 'yes':
        switch (selectedEnrollment){
          case 'yes':
            this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts != '0' && t.StartedEnrollment == 'Yes');
            break;
          case 'no':
            this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts != '0' && t.StartedEnrollment == 'No');
            break;
          default:
            this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts != '0');
            break;
        }
        break;
      case 'no':
        switch (selectedEnrollment){
          case 'yes':
            this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts == '0' && t.StartedEnrollment == 'Yes');
            break;
          case 'no':
            this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts == '0' && t.StartedEnrollment == 'No');
            break;
          default:
            this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts == '0');
            break;
        }
        break;
      default:
        switch (selectedEnrollment){
          case 'yes':
            this.filteredParticipants = this.participants.filter(t => t.StartedEnrollment == 'Yes');
            break;
          case 'no':
            this.filteredParticipants = this.participants.filter(t => t.StartedEnrollment == 'No');
            break;
          default:
            this.filteredParticipants = this.participants;
            break;
        }
        break;
    }

    // if (selectedOutreach == 'no' && selectedEnrollment == 'all') {  
    //   this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts == '0');
    // }
    // else if (selectedOutreach == 'no' && selectedEnrollment == 'yes') {  
    //   this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts == '0' && t.StartedEnrollment == 'Yes');
    // }
    // else if (selectedOutreach == 'no' && selectedEnrollment == 'no') {  
    //   this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts == '0' && t.StartedEnrollment == 'No');
    // }
    // else if (selectedOutreach == 'yes' && selectedEnrollment == 'all') {  
    //   this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts != '0');
    // }
    // else if (selectedOutreach == 'yes' && selectedEnrollment == 'yes') {  
    //   this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts != '0' && t.StartedEnrollment == 'Yes');
    // }
    // else if (selectedOutreach == 'yes' && selectedEnrollment == 'no') {  
    //   this.filteredParticipants = this.participants.filter(t => t.OutreachAttempts != '0' && t.StartedEnrollment == 'No');
    // }
    // else if (selectedOutreach == 'all' && selectedEnrollment == 'yes') {  
    //   this.filteredParticipants = this.participants.filter(t => t.StartedEnrollment == 'Yes');
    // }
    // else if (selectedOutreach == 'all' && selectedEnrollment == 'no') {  
    //   this.filteredParticipants = this.participants.filter(t => t.StartedEnrollment == 'No');
    // }
    // else {
    //   this.filteredParticipants = this.participants;
    // }
  }
}
