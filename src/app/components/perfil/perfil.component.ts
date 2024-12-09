import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports:[CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  profiles = [
    {
      name: 'Juan Pérez',
      devices: [
        { name: 'Dispositivo 1', data: 'Información adicional del dispositivo 1' }
      ]
    },
    {
      name: 'Ana Gómez',
      devices: [
        { name: 'Dispositivo 2', data: 'Información adicional del dispositivo 2' }
      ]
    },
    {
      name: 'Carlos Ruiz',
      devices: [
        { name: 'Dispositivo 3', data: 'Información adicional del dispositivo 3' }
      ]
    }
  ];
}