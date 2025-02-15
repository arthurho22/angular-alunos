import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/Aluno';

@Component({
  selector: 'app-studant',
  standalone: false,
  templateUrl: './studant.component.html',
  styleUrl: './studant.component.css'
})
export class StudantComponent {

  @Input()
  aluno!: Aluno;

  textoGrande: String = '35px';
  textoMedio: String = '20px';
  textopequeno: String = '12px';

}
