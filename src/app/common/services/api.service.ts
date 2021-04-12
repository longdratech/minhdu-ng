import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, RequestOptions, ResponseContentType } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/catch';
// import { unescape } from 'querystring';
import { Router } from '@angular/router';
import * as _moment from 'moment';
import * as _ from 'lodash';

const moment = _moment;
// import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private cache = {
        productCategories: []
    };
    commonService: any;
    constructor(private http: Http, private router: Router) {}

}
