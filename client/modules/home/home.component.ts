import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";

declare let TweenMax;
declare let Circ;
declare let Back;
declare let $;

@Component({
    selector: "home",
    styleUrls: ["client/modules/home/home.component.css"],
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent implements AfterViewInit{


    StepsContainer;
    MainBox;
    SideBox;

    FirstContainer;

    NewSetContainer;
    SavedSetContainer;

    sidebar;

    OptionsContainer;

    TotalList:any[] = [];

    constructor(private parentRouter: Router) {}

    ngAfterViewInit(){

        this.NewSetContainer = $("#NewSetContainer");
        this.SavedSetContainer = $("#SavedSetContainer");

        this.OptionsContainer = $("#OptionTask");
        TweenMax.from(this.OptionsContainer, 0.5, {scale: 0, circ: Back.easeOut});


        // this.StepsContainer = $("#StepsContainer");
        // this.FirstContainer = $("#FirstConditionContainer")[0];
        // TweenMax.from(this.FirstContainer, 0.5, {circ: Back.easeOut});
    }

    OpenMenu(){
        this.sidebar = $('.demo.sidebar');
        this.sidebar.sidebar('setting', 'transition', 'scale down');
        this.sidebar.sidebar('setting', "dimPage", false);
        this.sidebar.sidebar('toggle');
    }

    PrintObject(){
        console.log(this.TotalList);
    }


    GoToNewSetPage(){
        this.OptionsContainer.hide();
        this.NewSetContainer.css("display", "block");
    }

    GoToSavedSet(){
        this.OptionsContainer.hide();
        this.SavedSetContainer.css("display", "block");
    }

    //ADD QUESTION
    AddQuestion(question_text, type){
        let questionID = Math.round((Math.random() *99999999)+ 10000000);
        let question_obj = {
            question_id: questionID,
            question_type: type,
            question_text: question_text,
            condition: []
        };
        this.TotalList.push(question_obj);
    }

    //DELETE QUESTION
    DeleteQuestion(i){
        this.TotalList.splice(1,1);
    }

    //ADD CONDITION TO QUESTIOn
    AddConditionToQuestion(condition, questionID, conditionType){

        let conditionID = Math.round((Math.random() *99999999)+ 10000000);
        let conditionObj = {
            condtionID: conditionID,
            condition_type: conditionType,
            condition: condition
        };

        for(let i = 0; i < this.TotalList.length; i++){
            if(this.TotalList[i].questionID === questionID){
                this.TotalList[i].condition.push(conditionObj);
            }
        }
    }

    //DELETE CONDITION
    DeleteCondition(conditionID, condition_index,question_index){
        for(let i = 0; this.TotalList[question_index].condition.length; i++){
            if(this.TotalList[question_index].condition[i].conditionID === conditionID){
                this.TotalList[question_index].condition[i].splice(condition_index, 1);
            }
        };
    }







}
