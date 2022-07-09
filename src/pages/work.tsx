import { DeckState } from '../state/dockState'
import { Deck } from '../deck/Deck'
import '../deck/deck.css'

export type Page = 'home' | 'work' | 'gift'

export function Work({ deckState }: { deckState: DeckState }) {
    return <div className={`app`}>
        <div className={`flex fill center container`}>
            <Deck deckState={deckState} />
        </div>
        <div className='buttonsW'>
            {deckState.size === 1 ? null : <button className="button" role="button" onClick={reset}>Recomeçar</button>}
            <button className="button" role="button" onClick={shuffle}>{deckState.size === 1 ? "Sortear outro preceito" : "Sortear"}</button>
        </div>
    </div>
    function reset() {
        deckState.setPage('home')
    }
    function shuffle() {
        deckState.shuffle()
    }
}
