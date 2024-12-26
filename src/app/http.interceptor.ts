import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN'),
  });

  

  return next(modifiedReq).pipe(catchError(d=>  {
    return throwError(()=> d)
  }));
};
