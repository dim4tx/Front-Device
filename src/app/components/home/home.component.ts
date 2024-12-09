import { Component, OnInit } from '@angular/core';
import { Activo_Equipo, HomeService } from '../../services/home-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [NgFor],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Activos_Equipos: Activo_Equipo[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices(): void {
    this.homeService.getDevices().subscribe({
      next: (data) => (this.Activos_Equipos = data),
      error: (err) => console.error('Error al cargar dispositivos', err),
    });
  }
}
