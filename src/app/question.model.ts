export class Question {
    
    questionId:number=0;
    questionText: string = "";
    questionAnswer: string ="answer";

    questiontype: string="";

    constructor(text:string,answer:string,questionId:number){
        this.questionText = text;
        this.questionAnswer = answer;
        this.questionId = questionId;
    }


}

