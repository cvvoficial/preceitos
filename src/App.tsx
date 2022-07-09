import { useState } from 'react'
import './App.css'
import { Deck } from './deck/Deck'
import './deck/deck.css'
import { preceitos } from './deck/preceitos'
import { useDeckState } from './state/dockState'

export function App() {
  const deckState = useDeckState();
  const [deckVisible, setDeckVisible] = useState(false)
  return deckVisible ?
    <div className={`app`}>
      <div className={`flex fill center container`}>
        <Deck deckState={deckState} />
      </div>
      <div className={`buttons`}>
        <button className="button" role="button" onClick={reset}>Recomeçar</button>
        <button className="button" role="button" onClick={shuffle}>Sortear</button>
      </div>
    </div> : <div className={`app fill center container buttonsA`}>
        <button className="button" role="button" onClick={reset}>Ver preceitos</button>
        <button className="button" role="button" onClick={shuffle}>Sortear preceito</button>
    </div>
    function reset() {
      setDeckVisible(true);
      deckState.reset()  
    }
    function shuffle() {
      setDeckVisible(true);
      deckState.shuffle()  
    }
}