import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {QuestionService} from "./service/QuestionService";

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

    CurrentQuestion;
    CurrentQuestionIndex;

    workAroundCounter = 0;


    OptionsContainer;

    TotalList:any[] = [];


    constructor(private parentRouter: Router, private questionService: QuestionService) {
    }

    ngAfterViewInit(){

        this.NewSetContainer = $("#NewSetContainer");
        this.SavedSetContainer = $("#SavedSetContainer");

        this.OptionsContainer = $("#OptionTask");
        TweenMax.from(this.OptionsContainer, 0.5, {scale: 0, circ: Back.easeOut});

        // this.StepsContainer = $("#StepsContainer");
        // this.FirstContainer = $("#FirstConditionContainer")[0];
        // TweenMax.from(this.FirstContainer, 0.5, {circ: Back.easeOut});
    }

    OpenAddConditionModal(){
        $('.small.modal.add-condition-modal').modal('show');
    }

    EditQuestionModal(){
        $('.small.modal.edit-qustion').modal('show');
    }

    CreateQuestionModal(){
        let myModal = $('.small.modal.create-qustion').modal('show');
    }

    ModalApproved(str, name, type){
        console.log("Hey");
    }

    CreateQuestionFirst(){

    }

    OpenMenu(){
        this.sidebar = $('.demo.sidebar');
        this.sidebar.sidebar('setting', 'transition', 'scale down');
        this.sidebar.sidebar('setting', "dimPage", false);
        this.sidebar.sidebar('toggle');
    }

    SelectQuestion(elem, obj){

        this.workAroundCounter++;

        if(this.workAroundCounter === 1){
            let workM = $(".div-box")[1];
            $(workM).css("border", "");
        }

        console.log(elem);
        $(this.CurrentQuestion).css("border", "");
        $(elem.target).css("border", "6px solid #16AB39");
        this.CurrentQuestion = elem.target;

        this.questionService.ConvertContainerBack = this.CurrentQuestion;

        this.questionService.CurrentMainQuestion = obj;


    }

    PrintObject(){
        console.log(this.TotalList);
    }

    GoToNewSetPage(){
        this.OptionsContainer.hide();
        this.NewSetContainer.css("display", "block");
        TweenMax.from(this.NewSetContainer, 0.5, {scale: 0, circ: Back.easeOut});
        setTimeout(() => {
            this.CreateQuestionModal();
        }, 500);
    }

    GoToSavedSet(){
        this.OptionsContainer.hide();
        this.SavedSetContainer.css("display", "block");
    }

    TestOptions(check){
        console.log(check.children);

        let OptionOrder = ["Any", "Date", "Gender", "Birthday"];

        for(let i = 0; i < check.children.length; i++){
            if($(check.children[i]).checkbox('is checked')){
                return OptionOrder[i];
            }
        }

    }











}
