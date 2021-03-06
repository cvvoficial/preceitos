import { useEffect, useState } from 'react'
import { useSprings, SpringValue } from '@react-spring/web'
import { ReactDOMAttributes, useDrag } from '@use-gesture/react'
import { Preceito, preceitos } from '../deck/preceitos'

export type Page = 'home' | 'work' | 'gift' | 'make-gift'

export interface DeckState {
    page: Page
    size: number
    cards: Preceito[]
    bunch: Array<{
        x: SpringValue<number>;
        rot: SpringValue<number>;
        scale: SpringValue<number>;
        y: SpringValue<number>;
    }>
    bind: (...args: any[]) => ReactDOMAttributes
    activeIndex: number
    reset(): void
    shuffle(): void
    select(index: number): void
    setPage(page: Page): void
}

export function useDeckState(): DeckState {
    const [page, setPage] = useState<Page>(
        () =>
            window.location.hash.includes('GIFT')
                ? 'gift' : 'home'
    )
    const [cards, setCards] = useState(() => [...preceitos])
    const [activeIndex, setActiveIndex] = useState(0)
    const deckSize = cards.length
    const [bunch, api] = useSprings(deckSize, restarting)
    const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        if (index === activeIndex) {
            const trigger = vx > 0.2
            if (!active && trigger) setActiveIndex((i) => i + 1)
            triggerCard(index, active, mx, xDir, vx, trigger)
        } else {
            select(index)
        }
    })

    useEffect(() => {
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
        function handlePopState(e: PopStateEvent) {
            console.log(e)
            const page = e.state || 'home'
            setPage(page)
        }
    })
    return {
        get size() {
            return deckSize;
        },
        page,
        cards,
        bunch,
        bind,
        activeIndex,
        reset() {
            restartWith([...preceitos])
        },
        shuffle() {
            restartWith(
                [...preceitos].sort(
                    () => Math.random() - 0.5
                ).slice(0, 1))
        },
        select,
        setPage(nPage: Page) {
            window.history.pushState(page, '', window.location.href)
            setPage(nPage)
        },
    }

    function select(index: number) {
        for (let i = activeIndex; i < index; i++) {
            setActiveIndex(i)
            triggerCard(i, false, 300, 1, 1.3, true)
        }
    }

    function restartWith(cardToStart: Preceito[]) {
        Promise.all(api.start({
            ...startPos(),
            config: { friction: 50, tension: 500 },
        })).then(() => {
            setActiveIndex(0)
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

    function triggerCard(index: number, active: boolean, mx: number, xDir: number, vx: number, isGone: boolean) {
        api.start(i => {
            if (index !== i) return
            const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0
            const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0)
            const scale = active ? 1.3 : 1
            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: { friction: 350, tension: active ? 800 : isGone ? 200 : 500 },
            }
        })
        if (!active && activeIndex >= deckSize - 1)
            setTimeout(() => {
                // if (deckSize < 2) {
                setActiveIndex(0)
                api.start(i => to(i,))
                // } else {
                //     restartWith([...preceitos])
                // }
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
