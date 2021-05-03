import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto';
import { ProdutoServico } from '../servicos/produto/produto.servico';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {
  public produto: Produto;
  public arquivoSelecionado: File;
  public ativarSpinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico) {

  }
  ngOnInit(): void {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativarSpinner = true;
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
      (nomeArquivo) => {
        this.produto.nomeArquivo = nomeArquivo;        
        console.log(nomeArquivo);
        this.ativarSpinner = false;
      },
      (e) => {
        console.log(e.error);
        this.ativarSpinner = false;
      }
    );
  }

  public cadastrar() {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto).subscribe(
      (produtoJson) => {
        console.log(produtoJson);
        this.desativarEspera();
      },
      (e) => {
        console.log(e.error);
        this.mensagem = e.error;
        this.desativarEspera();
      }
    ); 
  }

  public ativarEspera(){
    this.ativarSpinner = true;
  }

  public desativarEspera(){
    this.ativarSpinner = false;
  }

}
