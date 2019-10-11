import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-manage-types',
  templateUrl: './manage-types.component.html',
  styleUrls: ['./manage-types.component.scss']
})
export class ManageTypesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  formQuizze() {
    this.router.navigate(['/engagement/forms-quizzes'])
  }
  emailList(){
    this.router.navigate(['/engagement/emails'])
  }
}
