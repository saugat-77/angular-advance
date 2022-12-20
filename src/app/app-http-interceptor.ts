import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AuthService } from './';


export class AppHttpInterceptor {

    // constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


    const newReq = req.clone({ //new clone garera matra garnu parcha
        headers: req.headers.set('Authorization', "authToken")
      });
  
      return next.handle(newReq);
  
  }
}