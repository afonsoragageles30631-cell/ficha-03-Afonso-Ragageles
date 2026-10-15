// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import { useState } from "react";
import Card from "./card.jsx";

const cards = [
  {
    name: "Dragão de Cobalto",
    type: "Criatura",
    attack: 7,
    defense: 5,
  },
  {
    name: "Guardiã das Marés",
    type: "Criatura",
    attack: 4,
    defense: 8,
  },
  {
    name: "Cria da Favela",
    type: "Criatura",
    attack: 400,
    defense: 80,
  },
  {
    name: "Mijadinho",
    type: "gamer",
    attack: 10,
    defense: 1,
  },
  {
    name: "fromdablock25zn",
    type: "Criatura",
    attack: 1000,
    defense: 1000,
  },
];

function App() {
  const [tipo, setTipo] = useState("Todas");
  const [pesquisa, setPesquisa] = useState("");
  const [cartaSorte, setCartaSorte] = useState(null);
  const [ordem, setOrdem] = useState("nenhuma");

  // Filtrar as cartas pelo tipo e pelo nome
  const cartasFiltradas = cards.filter((card) => {
  const correspondeTipo =
    tipo === "Todas" ||
    (tipo === "Criatura" && card.type === "Criatura") ||
    (tipo === "Gamer" && card.type === "gamer");

  const correspondeNome = card.name
    .toLowerCase()
    .includes(pesquisa.toLowerCase());

  return correspondeTipo && correspondeNome;
});

  // Ordenar as cartas pelo ataque
  const cartasOrdenadas = [...cartasFiltradas].sort((a, b) => {
    if (ordem === "crescente") {
      return a.attack - b.attack;
    }

    if (ordem === "decrescente") {
      return b.attack - a.attack;
    }

    return 0;
  });

  // Escolher uma carta aleatória
  function escolherCarta() {
    if (cartasFiltradas.length === 0) {
      setCartaSorte(null);
      return;
    }

    const indice = Math.floor(
      Math.random() * cartasFiltradas.length
    );

    setCartaSorte(cartasFiltradas[indice]);
  }

  return (
    <main>
      <h1>A minha coleção</h1>

      {/* Pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar carta..."
        value={pesquisa}
        onChange={(e) => {
          setPesquisa(e.target.value);
          setCartaSorte(null);
        }}
      />

      {/* Filtros por tipo */}
      <div>
  <button onClick={() => setTipo("Todas")}>
    Todas
  </button>

  <button onClick={() => setTipo("Criatura")}>
    Só criaturas
  </button>

  <button onClick={() => setTipo("Gamer")}>
    Só gamer
  </button>
</div>

      {/* Ordenação */}
      <div>
        <button onClick={() => setOrdem("crescente")}>
          Ataque crescente
        </button>

        <button onClick={() => setOrdem("decrescente")}>
          Ataque decrescente
        </button>

        <button onClick={() => setOrdem("nenhuma")}>
          Ordem original
        </button>
      </div>

      {/* Carta aleatória */}
      <button onClick={escolherCarta}>
        Carta à sorte
      </button>

      {cartaSorte && (
        <section>
          <h2>Carta escolhida</h2>
          <Card key={cartaSorte.name} {...cartaSorte} />
        </section>
      )}

      {/* Contagem de cartas visíveis */}
      <p>
        Tenho {cartasOrdenadas.length} cartas à vista,
        de um total de {cards.length}.
      </p>

      {/* Lista de cartas */}
      <ul>
        {cartasOrdenadas.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>

      {cartasOrdenadas.length === 0 && (
        <p>Não foram encontradas cartas.</p>
      )}
    </main>
  );
}

export default App;