import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, RequestOptions, ResponseContentType } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // tslint:disable-next-line:variable-name
    private _loginHubConnection: HubConnection;
    public connectedEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http) {
        const hubConnectionBuilder = new HubConnectionBuilder();
        hubConnectionBuilder.withUrl(environment.baseURl + 'loginhub'
            , { transport: HttpTransportType.WebSockets });

        this._loginHubConnection = hubConnectionBuilder.build();
        this._loginHubConnection.keepAliveIntervalInMilliseconds = 3000;
        this._loginHubConnection.serverTimeoutInMilliseconds = 60000;

        this._loginHubConnection.start().then(() => {
            console.log('connected');
            this.connectedEvent.emit();
        }, (err: any) => {
            console.log(err);
        });

        this._loginHubConnection.onclose(() => {
            console.log('onclose');
            this._loginHubConnection.start().then(() => {
                console.log('connected');
                this.connectedEvent.emit();
            });
        });
    }

}
