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
            <button className="button" role="button" onClick={reset}>Recomeçar</button>
            <button className="button" role="button" onClick={shuffle}>Sortear</button>
        </div>
    </div>
    function reset() {
        deckState.setPage('home')
    }
    function shuffle() {
        deckState.shuffle()
    }
}
