import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { delay, flatMap, Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route?.data && route?.data['preload']) {
        return timer(route.data['delay']).pipe(flatMap(_=> {
          console.log(route);
         return load()
      }))
      
    } else {
      return of(null);
    }
  }
}
