import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionArray:Question[];
  

  constructor() { 
  
  }



  newQuestion(){
    

   var question:Question = new Question("elso","masodik");

    this.questionArray.push(question);

    console.log(this.questionArray);

   
    
    
   
  
  }


  ngOnInit(): void {
  }

}
