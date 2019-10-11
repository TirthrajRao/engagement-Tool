import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kt-forms-quizzes',
  templateUrl: './forms-quizzes.component.html',
  styleUrls: ['./forms-quizzes.component.scss']
})
export class FormsQuizzesComponent implements OnInit {

  formQuizDetails;

  constructor(private modalService: NgbModal) { }

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

        }
      ]
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
}

}
