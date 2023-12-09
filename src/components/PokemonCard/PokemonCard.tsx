import { Link } from "react-router-dom";
import { TPokemon } from '../../types';
import ballImage from "../../assets/ball.png";
import './PokemonCard.scss'

const PokemonCard = ({ name, image }: TPokemon) => (
  <Link className="card" to={`/${name}`} >
    <img src={image || ballImage} alt={name} className="card__image" />
    <span className="card__name">{name.split('-')[0]}</span>
  </Link>
);

export default PokemonCard;