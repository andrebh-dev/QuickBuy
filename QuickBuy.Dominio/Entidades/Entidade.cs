using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagemsValidacao { get; set; }
        private List<string> mensagemValidacao
        {
            get { return _mensagemsValidacao ?? (_mensagemsValidacao = new List<string>()); }
        }

        protected bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }

        public abstract void Validate();

        protected void LimparMensagensValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }
    }
}
