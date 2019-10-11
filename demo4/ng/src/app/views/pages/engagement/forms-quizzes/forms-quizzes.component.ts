import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialog } from './form-dialog.component';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'kt-forms-quizzes',
	templateUrl: './forms-quizzes.component.html',
	styleUrls: ['./forms-quizzes.component.scss']
})
export class FormsQuizzesComponent implements OnInit {
	formQuizDetails
	constructor(public dialog: MatDialog,private modalService: NgbModal) { }

	ngOnInit() {
		this.formQuizDetails = [
			{
	  
			  formName: "Fun Quiz",
	
			}, {
			  formName: "Culture Quiz",
	
			}, {
			  formName: "Feedback Form",
	
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			},
			{
			  formName: "cvvzcxvrtgrtrtrt",
			}
		  ]
	}

	openDial(): void {
		const dialogRef = this.dialog.open(FormDialog, {
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
