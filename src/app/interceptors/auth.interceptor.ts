import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { AccountService } from "../services/account.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static accesToken = "";
  static refreshToken = "";
  private isRefreshing = false;

  // refreshToken = localStorage.getItem("refreshToken");
  header = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", `Bearer ${AuthInterceptor.refreshToken}`);
  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {
    console.log(AuthInterceptor.accesToken);
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.accesToken}`,
      },
    });

    return next.handle(req);

    /*.pipe(
      catchError((error: HttpErrorResponse) => {
        AuthInterceptor.refreshToken = localStorage.getItem("refreshToken");
        console.log(AuthInterceptor.refreshToken);
        console.log(AuthInterceptor.refreshToken.toString());
        console.log(AuthInterceptor.accesToken);
        console.log(AuthInterceptor.accesToken.toString());
        //console.log(AuthInterceptor.accesToken);
        //console.log(error.status);
        if (error.status === 403 && !this.isRefreshing) {
          this.isRefreshing = true;
          console.log(AuthInterceptor.refreshToken);

          console.log("enter forbidden");
          const headers = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set(
              "Authorization",
              `Bearer ${AuthInterceptor.refreshToken.toString()}`
            );
          console.log(headers.keys);
          this.isRefreshing = true;
          return this.http
            .get("http://localhost:8080/refreshToken", { headers })
            .pipe(
              switchMap((res: any) => {
                this.isRefreshing = false;
                console.log("res refresh token ", res);
                AuthInterceptor.accesToken = res.accesToken.toString();
                return next.handle(
                  request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${AuthInterceptor.accesToken.toString()}`,
                    },
                  })
                );
              })
            );
        }
        return throwError(() => error);
      })
    );*/
  }
}
