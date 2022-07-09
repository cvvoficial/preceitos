import { DeckState } from '../state/dockState'
import { Deck } from '../deck/Deck'
import giftIcon from '../gift-icon.png';
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
        <img src={giftIcon} className='gift-icon' onClick={makeGift}/>
    </div>
    function reset() {
        deckState.reset()
    }
    function shuffle() {
        deckState.shuffle()
    }
    function makeGift() {
        deckState.setPage('make-gift')
    }     
}
