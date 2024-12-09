import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-ambiente',
  imports:[CommonModule],
  templateUrl: './gestion-ambiente.component.html',
  styleUrls: ['./gestion-ambiente.component.css']
})
export class GestionAmbienteComponent {
  ambientes = [
    { name: 'Ambiente 1', available: true },
    { name: 'Ambiente 2', available: false },
    { name: 'Ambiente 3', available: true },
    { name: 'Ambiente 4', available: false }
  ];
}
