import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../modelo/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';

@Component({
  selector: 'loja-app-produto',
  templateUrl: '/loja.produto.component.html',
  styleUrls: ['/loja.produto.component.css']
})

export class LojaProdutoComponent implements OnInit {

  public produto: Produto;

  ngOnInit(): void {    
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  public comprar() {
    this.router.navigate(['/loja-efetiar']);
  }

}
