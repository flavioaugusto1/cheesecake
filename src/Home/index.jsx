import { Container } from "./styles";
import CheeseCake from "../assets/01.jpg";

export function Home() {
  return (
    <Container>
      <section className="recipe">
        <h1>Cheesecake de Frutas</h1>
        <img
          src={CheeseCake}
          alt="Imagem de CheeseCake com um morango encima"
        />
        <p>
          Essa receita de cheesecake de frutas vermelhas é simplesmente
          deliciosa! A combinação do doce do morango com o sabor levemente ácido
          do mirtilo cria uma sobremesa fresca e equilibrada. Além disso, a
          textura cremosa do cheesecake contrasta perfeitamente com a crocância
          da base de biscoitos. Se você está procurando uma sobremesa fácil de
          fazer e que impressione seus convidados, essa é a receita ideal.
        </p>
      </section>

      <section className="ingredients">
        <h1>Modo de preparo</h1>
        <ul>
          <strong>Ingedientes:</strong>

          <li>200g de biscoitos maisena</li>
          <li>100g de manteiga</li>
          <li>300g de cream cheese</li>
          <li>1 lata de leite condensado</li>
          <li>1/2 xícara de suco de limão</li>
          <li>1 colher de sopa de gelatina em pó incolor</li>
          <li>1 xícara de morangos picados</li>
          <li>1 xícara de mirtilos</li>
        </ul>

        <ol>
          <strong>Modo de preparo:</strong>

          <li>
            Triture os biscoitos e misture com a manteiga derretida. Forre uma
            forma e leve à geladeira.
          </li>
          <li>
            Bata o cream cheese, leite condensado e suco de limão. Adicione a
            gelatina dissolvida.
          </li>
          <li>
            Despeje sobre a base de biscoitos e leve à geladeira por 2 horas.
          </li>
          <li>Cubra com as frutas e sirva gelado.</li>
        </ol>

        <button>Reportar Erro</button>
      </section>
    </Container>
  );
}
