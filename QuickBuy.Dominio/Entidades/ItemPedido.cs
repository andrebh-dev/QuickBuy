namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProditoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProditoId == 0)
            {
                AdicionarCritica("Não foi identificado a referência do produto");
            }
            if (Quantidade == 0)
            {
                AdicionarCritica("Não foi informada a quantidade");
            }
        }
    }
}
