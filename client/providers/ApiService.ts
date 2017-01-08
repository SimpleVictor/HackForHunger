import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class ApiService{


    url = `http://h4h-api.48yn9m8g4b.us-east-1.elasticbeanstalk.com/api/questions`;

    constructor(private http: Http) { }

    //Get Request
    GetAllQuestions(){
        this.http.get(`${this.url}/questions`).map((res:Response) => {res.json()}).subscribe(
            (data) => {
                console.log(data);
            }, (err) => {
                console.log(err);
                console.log("Error");
            }
        )
    }

    UpdateQuestion(id){
        let obj = {
            active: 0
        };
        let body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`${this.url}/questions/${id}`, body, options).map((res: Response) => res.json()).subscribe(
            (data) => {
                console.log(data);
            }, (err) => {
                console.log(err);
                console.log("Error");
            });
    }


    SaveQuestion(){
        let obj = {
            active: 0
        };
        let body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`${this.url}/questions`, body, options).map((res: Response) => res.json()).subscribe(
            (data) => {
                console.log(data);
            }, (err) => {
                console.log(err);
                console.log("Error");
            });
    }


}