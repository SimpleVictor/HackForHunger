import { Injectable } from '@angular/core';
import {HomeComponent} from "../home.component";

declare let TweenMax;
declare let Circ;
declare let Back;
declare let $;

@Injectable()
export class QuestionService{

    FullList:any = [];
    CurrentOperation;

    CurrentMainQuestion;
    CurrentMainIndex;

    ConvertContainerBack;

    cheatlol: boolean = false;
    TimerCounter = 0;

    constructor() {

    }

    //MY OBJECY
    QuestionModel(str, name, type ){
        let myArray:any[] = [];
        let obj = {
            question_name: name,
            question_id: this.GenerateRandomNumber(),
            question_type: type,
            question_text: str,
            conditions: myArray
        };
        console.log(obj);
        this.FullList.push(obj);
        this.CurrentMainQuestion = obj;

        this.cheatlol = true;

        if(this.TimerCounter < 1){
            this.TimerCounter++;
            setTimeout(() => {
                // $(this.ConvertContainerBack).css("border", "");

                let divContainer = $(".div-box")[1];
                console.log(divContainer);
                $(divContainer).css("border", "6px solid #16AB39");
            }, 500);
        }
    }

    //Condition Model
    ConditionModel(str, name?, type?){
        let myArray:any[] = [];
        let obj;
        obj = {
            condition_id: this.GenerateRandomNumber(),
            condition_name: name,
            condition_text: str,
            condition_type: type,
            conditions: myArray
        } ;

        let currentId = Number.parseInt($(".hidden-feature")[0].innerHTML);

        for(let i = 0; i < this.FullList.length ; i++){
            if(this.FullList[i].question_id === currentId){
                this.FullList[i].conditions.push(obj);
            }
        }

        $().css("border", "6px solid #16AB39");
        return this.FullList;
    }

    PrintThisOut(){
        console.log(this.FullList);
    }

    GenerateRandomNumber(){
        let ranNum = Math.round((Math.random() *99999999)+ 10000000);
        return ranNum;
    }

    //QUESTIONS         QUESTIONS           QUESTIONS           QUESTIONS
    AddQuestion(str,name ,type){
        let OptionOrder = ["Entity", "Sentiment", "Yes/No/Maybe", "Numeric"];

        for(let i = 0; i < type.children.length; i++){
            if($(type.children[i]).checkbox('is checked')){
                let obj = this.QuestionModel(str, name, OptionOrder[i]);
            }
        }
    }

    DeleteQuestion(index){
        this.FullList.splice(1,index);
    }

    //Condition           Condition           Condition
    AddCondition(str, name, type){
        console.log("MADE IT");
        console.log(type);
        $(type);
        let OptionOrder = ["Entity", "Sentiment", "Yes/No/Maybe", "Numeric"];
        for(let i = 0; i < type.children.length; i++){
            if($(type.children[i]).checkbox('is checked')){
                console.log("Made it here");
                let obj = this.ConditionModel(str, name, OptionOrder[i]);
            }
        }
    }

    DeleteCondition(){
        // this.FullList.conditions
    }


}