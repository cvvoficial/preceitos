import { useState } from 'react'
import { useDeckState } from './state/dockState'
import './App.css'
import { Gift } from './pages/gitf'
import { Work } from './pages/work'
import { Home } from './pages/home'
import { MakeGift } from './pages/make-gift'

export function App() {
  const deckState = useDeckState()
  switch (deckState.page) {
    case 'work':
      return <Work deckState={deckState} />
    case 'gift':
      return <Gift />
    case 'make-gift':
      return <MakeGift deckState={deckState} />
    case 'home':
      return <Home deckState={deckState} />
  }
}
