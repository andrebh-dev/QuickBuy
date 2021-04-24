import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  template: '<html><body>{{ obterNome() }}</body></html>'
})

export class ProdutoComponent { // Nome de classe começa com maíusculo.

  // camelCase para variáveis, atributos e nomes de funções.
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string{
    return "Samsung";
  }
  
}
