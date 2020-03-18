import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionArray:Question[] =[];
  questionId:number = 0;

  constructor() { 
   
  }



  newQuestion(){
    

    var question:Question = new Question("","",this.questionId);
    this.questionId += 1;
    this.questionArray.push(question);
    
    for(var i = 0; i< this.questionArray.length;++i){
      console.log(this.questionArray[i].questionId);
    }
    console.log(question);

  
  }
  deleteQuestion(questionId){
    console.log("questionId:");
    console.log(questionId);
    for(var i= 0; i < this.questionArray.length;++i){
      if(this.questionArray[i]== questionId){
        console.log("törlés");
        this.questionArray.splice(i,1);
      }
    }
    
    console.log(this.questionArray);
  }
  saveQuestionnaire(){

    console.log("SAVED");
  }

  ngOnInit(): void {
  }

}
