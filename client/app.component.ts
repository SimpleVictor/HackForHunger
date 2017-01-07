import { Component } from "@angular/core";

declare let $;

@Component({
    selector: "app",
    template: `


<router-outlet></router-outlet>
`
})
export class AppComponent {

    constructor() {

    }

}