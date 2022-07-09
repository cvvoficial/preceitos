import { DeckState } from '../state/dockState'
import gift from '../gift.png';
import './gift.css'
import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';

export function Gift({ deckState }: { deckState: DeckState }) {
    const giftRef = useRef<HTMLImageElement>(null)
    const [cnt, setCnt] = useState(1)
    const [deStyle, setDeStyle] = useState<CSSProperties>({ visibility: 'collapse' })
    const [paraStyle, setParaStyle] = useState<CSSProperties>({ visibility: 'collapse' })
    const de = 'Fernando'
    const para = 'Ana'
    useLayoutEffect(() => {
        const img = giftRef.current
        if (img) {
            setTimeout(() => {
                const bounds = img.getBoundingClientRect()
                const left = bounds.left;
                const top = bounds.top;
                const height = bounds.bottom - top;
                const width = bounds.right - left;
                console.log(left, top, height, width)
                setDeStyle({
                    position: 'absolute',
                    visibility: 'visible',
                    zIndex: 1,
                    left: Math.round(left + (width - left) * 0.20),
                    top: Math.round(top + (height - top) * 0.49),
                    maxWidth: Math.round(width * 0.25),
                    transform: 'rotate(13deg)',
                    fontSize: 38,
                })
                setParaStyle({
                    position: 'absolute',
                    visibility: 'visible',
                    zIndex: 1,
                    left: Math.round(left + (width - left) * 0.24),
                    top: Math.round(top + (height - top) * 0.63),
                    maxWidth: Math.round(width * 0.25),
                    transform: 'rotate(13deg)',
                    fontSize: 38,
                })
            }, 10)
            window.addEventListener('resize', refresh)
            return () => {
                window.removeEventListener('resize', refresh)
            }
        }
        console.log(giftRef);
        function refresh() {
            console.log('refreshing')
            setCnt((c) => (c + 1) % 1000)
        }
    }, [giftRef.current, cnt])
    return <div className={`app fill center container`} style={{ position: 'relative' }}>
        <img src={gift} className="gift" ref={giftRef} prop/>
        <div style={deStyle}>{de}</div>
        <div style={paraStyle}>{para}</div>
    </div>;
}

