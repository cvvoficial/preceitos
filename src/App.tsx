import { useState } from 'react'
import { useDeckState } from './state/dockState'
import './App.css'
import { Gift } from './pages/gitf'
import { Work } from './pages/work'
import { Home } from './pages/home'

export function App() {
  const deckState = useDeckState()
  switch (deckState.page) {
    case 'gift':
      return <Gift deckState={deckState} />
    case 'work':
      return <Work deckState={deckState} />
    case 'home':
      return <Home deckState={deckState} />
  }
}
