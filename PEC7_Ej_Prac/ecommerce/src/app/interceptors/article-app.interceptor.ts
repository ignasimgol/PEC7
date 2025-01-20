import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from './../services/user-store.service';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {

  constructor(private userStore: UserStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userStore.getToken();  // Obtener el token almacenado

    // Si hay un token, lo añadimos al encabezado Authorization
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(clonedRequest);  // Continuar con la solicitud
    } else {
      return next.handle(req);  // Si no hay token, continuar con la solicitud sin modificar
    }
  }
}
