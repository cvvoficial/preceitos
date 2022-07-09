import { DeckState, } from '../state/dockState'

export function Gift({ deckState }: { deckState: DeckState }) {
    return <div className={`app fill center container center-child`}>
        <button className="button" role="button" onClick={reset}>Ver preceitos</button>
        <button className="button" role="button" onClick={shuffle}>Sortear preceito</button>
    </div>;
    function reset() {
        deckState.setPage('work')
        deckState.reset()
    }
    function shuffle() {
        deckState.setPage('work')
        deckState.shuffle()
    }
}

