import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GaleriaComponent } from '../galeria/galeria.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [GaleriaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  constructor() {}
}