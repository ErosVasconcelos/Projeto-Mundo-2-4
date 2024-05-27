import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro A',
      resumo: 'Resumo do Livro A',
      autores: ['Autor A1', 'Autor A2']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro B',
      resumo: 'Resumo do Livro B',
      autores: ['Autor B1']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro C',
      resumo: 'Resumo do Livro C',
      autores: ['Autor C1', 'Autor C2', 'Autor C3']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(livro => livro.codigo)) + 1 : 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
