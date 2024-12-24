import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN'),
  });

  return next(modifiedReq);
};
