import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmailDialog } from './email-dialog.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

@Component({
	selector: 'kt-emails',
	templateUrl: './emails.component.html',
	styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
	emailDetails;
	constructor(public dialog: MatDialog,private modalService: NgbModal) { }

	ngOnInit() {
		this.emailDetails = [
			{
	  
			  emailName: "Welcome Email",
			  candidateName: "Jack",
			  content: "Welcome to our company.Hope you have a good time."
			}, {
			  emailName: "Fun Quiz",
			  candidateName: "Mike",
			  content: "Welcome to our company.Hope you have a good time."
			}, {
			  emailName: "Feedback Form",
			  candidateName: "Joffer",
			  content: "Welcome to our company.Hope you have a good time."
			},
			{
			  emailName: "Quiz Email",
			  candidateName: "smith",
			  content: "Welcome to our company.Hope you have a good time."
			}
		  ]
	}

	openDial(): void {
		const dialogRef = this.dialog.open(EmailDialog, {
			width: '450px',
			height: '200px'
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

	open(content) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	  }
}
