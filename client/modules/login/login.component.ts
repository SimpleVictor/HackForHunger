import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";

declare let TweenMax;
declare let Circ;
declare let Back;
declare let $;

@Component({
    selector: "home",
    styleUrls: ["client/modules/login/login.component.css"],
    templateUrl: `client/modules/login/login.component.html`
})
export class LoginComponent implements AfterViewInit{


    ShowLoader: boolean = false;
    LoginContainer;
    Loader;

    constructor(private parentRouter: Router) {}

    ngAfterViewInit(){
        this.LoginContainer = $(".demo")[0];
        this.Loader = $(".loader")[0];
    }

    SignIn(){
        TweenMax.to(this.LoginContainer, 0.5, {scale: 0, ease: Back.easeOut});
        this.ShowLoader = true;
        setTimeout(() => {
            TweenMax.from(this.Loader, 0.5, {scale: 0, ease: Back.easeOut, delay: 0.5});
        }, 500);

        //When the User is logged in
        setTimeout(() => {
            this.parentRouter.navigateByUrl('/home');
        }, 3000);

    }


}
