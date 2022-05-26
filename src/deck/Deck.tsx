import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import './deck.css'
import { Card } from './Card'
import { DeckState } from '../state/dockState'

export function Deck({ deckState }: { deckState: DeckState }) {
  const { cards, bunch, bind } = deckState
  return (
    <>
      {bunch.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y, zIndex: 1000 - i }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <Card preceito={cards[i]} />
          </animated.div>
        </animated.div>
      ))}
    </>
  )
}

function trans(r: number, s: number) {
  return `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
}
