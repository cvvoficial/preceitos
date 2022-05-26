import { Preceito } from "./preceitos";
import './card.css'
import logo from '../cvv.png';

export function Card({ preceito }: { preceito: Preceito }) {
    return <div className="card flex fill center">
        <img src={logo} width="200px"/>
        <h1>Preceito: {preceito.num}</h1>
        <p>{preceito.title}</p>
    </div>
}