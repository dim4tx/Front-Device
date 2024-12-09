import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Activo_Equipo {
  id: number;
  tipo: string;
  marca: string;
  modelo: string;
  color: string;
  zonaId: number;
  responsableId: number;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:8080/api/activos';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Activo_Equipo[]> {
    return this.http.get<Activo_Equipo[]>(this.apiUrl);
  }
}
