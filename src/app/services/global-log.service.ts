import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';

@Injectable({
  providedIn: 'root'
})
export class GlobalLogService implements ErrorHandler {

  constructor(private router: Router ) { }

  handleError(error: any): void {
    const message = error.message ? error.message : error.toString();
    const url = this.router.url; 
    const user = "login user";
    StackTrace.fromError(error).then(s=>{
        const stackstring = s.splice(0,20).map(function(r){
            return r.toString();
        }).join('\n');

        console.log({message,url,user,stack:stackstring}); // we will log it 
    })  

  }
}
