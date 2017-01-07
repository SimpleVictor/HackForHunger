import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";



@Component({
    selector: "visual",
    styleUrls: ["client/modules/visual/visual.component.css"],
    templateUrl: `client/modules/visual/visual.component.html`
})
export class VisualComponent{


    constructor(private parentRouter: Router) {}

}
