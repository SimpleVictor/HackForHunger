import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from './app.component';
import { routing } from "./routes";

import { HomeModule } from "./modules/home/home.module";
import {LoginModule} from "./modules/login/login.module";
import {VisualModule} from "./modules/visual/visual.module";
import {ApiService} from "./providers/ApiService";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        LoginModule,
        VisualModule,
        NgSemanticModule,
        HomeModule,
        routing
    ],
    providers: [
        ApiService
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
