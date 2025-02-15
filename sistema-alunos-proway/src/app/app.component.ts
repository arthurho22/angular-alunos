import { Component } from '@angular/core';
import { Aluno } from './interfaces/Aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema Alunos Proway';
  
  // Variável que controla a ordem de exibição, podendo ser 'cards' ou 'list'
  exibicao: string = 'cards'; 

  // Lista de alunos
  listaAlunos: Aluno[] = [
    {
      nome: 'Harry Potter',
      curso: 'Angular',
      matricula: 111,
      email: 'harry@proway.com',
      cadastro: false,
      imagem: '/assets/images/user1.png'
    },
    {
      nome: 'Hermione Granger',
      curso: 'Typescript',
      matricula: 222,
      email: 'hermione@proway.com',
      cadastro: true,
      imagem: '/assets/images/user3.png'
    },
    {
      nome: 'Rony Weasley',
      curso: 'Typescript',
      matricula: 333,
      email: 'Rony@proway.com',
      cadastro: true,
      imagem: '/assets/images/user2.png'
    }
  ];

  // Função para alterar a ordem de exibição
  alterarOrdemExibicao(): void {
    if (this.exibicao !== 'cards') {
      alert('A ordem de exibição foi alterada!');
    } else {
      alert('A ordem de exibição está na ordem original.');
    }

    // Alterna entre 'cards' e 'list'
    this.exibicao = this.exibicao === 'cards' ? 'list' : 'cards';
  }

  // Função de exibição (apenas para efeito visual de exemplo)
  exibirAluno(aluno: Aluno) {
    if (this.exibicao === 'cards') {
      // Exibição no formato de cards
      return `<div class="card"><img src="${aluno.imagem}" alt="${aluno.nome}"><p>${aluno.nome}</p><p>${aluno.curso}</p></div>`;
    } else {
      // Exibição no formato de lista
      return `<div class="list-item"><p>${aluno.nome} - ${aluno.curso}</p></div>`;
    }
  }
}
