import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
// import { $ } from 'protractor';
declare const $: any;
@Component({
  selector: 'kt-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  emailDetails;
  constructor(private modalService: NgbModal, private router: Router) { }

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



  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  createNewEmail() {
    console.log("hellooo")
    $('#model').modal('hide');
    this.router.navigate(['/newVideoEmail'])
    
  }
}
