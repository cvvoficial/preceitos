import { DeckState, } from '../state/dockState'
import logo from '../cvv.png';

export function Home({ deckState }: { deckState: DeckState }) {
    return <div className={`app fill center container buttonsH`}>
        <img src={logo} width="200px" />
        <h1>Preceitos do CVV</h1>
        <button className="button" role="button" onClick={reset}>Ver preceitos</button>
        <button className="button" role="button" onClick={shuffle}>Sortear preceito</button>
        <button className="button" role="button" onClick={makeGift}>Presentear alguém</button>
    </div>;
    function reset() {
        deckState.setPage('work')
        deckState.reset()
    }
    function shuffle() {
        deckState.setPage('work')
        deckState.shuffle()
    }
    function makeGift() {
        deckState.setPage('make-gift')
    }
}

