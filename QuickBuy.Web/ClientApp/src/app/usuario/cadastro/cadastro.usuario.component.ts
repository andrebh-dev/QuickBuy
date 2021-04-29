import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../modelo/usuario'
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
  selector: 'novo-usuario',
  templateUrl: './cadastro.usuario.component.html',
  styleUrls: ['./cadastro.usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public ativarSpinner: boolean;
  public mensagem: string;
  public usuariocadastrado: boolean;

  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    this.usuarioServico.cadastrarUsuario(this.usuario).subscribe(
      (usuarioJson) => { 
        this.usuariocadastrado = true;
        this.mensagem = "";
      },
      (e) => {
        this.mensagem = e.error;
        
      }
    );
  }
}
