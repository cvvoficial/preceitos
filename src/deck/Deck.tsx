import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import './deck.css'
import { Card } from './Card'
import { DeckState } from '../state/dockState'

export function Deck({ deckState }: { deckState: DeckState }) {
  const { cards, bunch, bind, activeIndex } = deckState
  return (
    <>
      {bunch.map(({ x, y, rot, scale }, i) => (
        <animated.div
          className="deck"
          key={i}
          style={{ x, y, zIndex: i <= activeIndex ? 5000 - i : 1000 - i }}>
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
