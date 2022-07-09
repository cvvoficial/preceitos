import { DeckState, } from '../state/dockState'

export function Home({ deckState }: { deckState: DeckState }) {
    return <div className={`app fill center container buttonsH`}>
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

