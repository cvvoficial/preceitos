import { useState } from 'react'
import { useSprings, SpringValue } from '@react-spring/web'
import { ReactDOMAttributes, useDrag } from '@use-gesture/react'
import { Preceito, preceitos } from '../deck/preceitos'

export interface DeckState {
    cards: Preceito[]
    bunch: Array<{
        x: SpringValue<number>;
        rot: SpringValue<number>;
        scale: SpringValue<number>;
        y: SpringValue<number>;
    }>
    bind: (...args: any[]) => ReactDOMAttributes
    reset(): void
    shuffle(): void
    select(index: number): void
}

export function useDeckState(): DeckState {
    const [cards, setCards] = useState(() => [...preceitos])
    const deckSize = cards.length
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [bunch, api] = useSprings(deckSize, restarting) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        if (index === gone.size) {
            const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
            if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
            hideCard(index, active, mx, xDir, vx)
        } else {
            select(index)
        }
    })

    return {
        cards,
        bunch,
        bind,
        reset() {
            restartWith([...preceitos])
        },
        shuffle() {
            restartWith([...preceitos].sort(() => Math.random() - 0.5))
        },
        select
    }

    function select(index: number) {
        for (let i = gone.size; i < index; i++) {
            gone.add(i)
            hideCard(i, false, 300, 1, 1.3)
        }
    }

    function restartWith(cardToStart: Preceito[]) {
        Promise.all(api.start(startPos())).then(() => {
            gone.clear()
            setCards(cardToStart)
            api.start(i => to(i))
        })
    }

    function restarting(i: number) {
        return {
            ...to(i),
            from: startPos(),
        }
    }

    function startPos() {
        return { x: -window.outerWidth, rot: 0, scale: 1.5, y: 0 }
    }

    function hideCard(index: number, active: boolean, mx: number, xDir: number, vx: number) {
        api.start(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = active ? 1.3 : 1 // Active cards lift up a bit
            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
            }
        })
        if (!active && gone.size === deckSize)
            setTimeout(() => {
                gone.clear()
                api.start(i => to(i,))
            }, 600)
    }

    function to(i: number): CardProps {
        const rev = (deckSize - i + 1)
        return {
            x: 0,
            y: rev * -3,
            scale: 1,
            rot: -7 + Math.random() * 14,
            delay: rev * 50,
        }
    }
}

export interface CardProps {
    x: number
    y: number
    rot: number
    scale: number
    delay: number
}
