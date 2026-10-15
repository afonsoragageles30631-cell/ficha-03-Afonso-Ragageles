import { useState } from "react";
function Card({ name, attack, type, defense }) {
const [likes, setLikes] = useState(0);
return (
<li className="card">
<h3>{name}</h3>
  <p>Tipo: {type}</p>
  <p>Ataque: {attack}</p>
  <p>Defesa: {defense}</p>

  {attack >= 6 && <span>Forte</span>}

  <br />

  <button onClick={() => setLikes(likes + 1)}>
    ♥ {likes}
  </button>
</li>
);
}
export default Card;