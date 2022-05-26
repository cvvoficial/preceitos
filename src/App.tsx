import { useState } from 'react'
import './App.css'
import { Deck } from './deck/Deck'
import './deck/deck.css'
import { preceitos } from './deck/preceitos'
import { useDeckState } from './state/dockState'

export function App() {
  const deckState = useDeckState();
  return (
    <div className={`app`}>
      <div className={`flex fill center container`}>
        <Deck deckState={deckState} />
      </div>
      <div className={`buttons`}>
        <button className="button" role="button" onClick={() => deckState.reset()}>Recomeçar</button>
        <button className="button" role="button" onClick={() => deckState.shuffle()}>Embaralhar</button>
      </div>
    </div>
  )
}