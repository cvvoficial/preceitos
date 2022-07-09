import { DeckState } from '../state/dockState'
import gift from '../gift.png';
import './gift.css'
import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';

export function Gift() {
    const giftRef = useRef<HTMLImageElement>(null)
    const [cnt, setCnt] = useState(1)
    const [deStyle, setDeStyle] = useState<CSSProperties>({ visibility: 'collapse' })
    const [paraStyle, setParaStyle] = useState<CSSProperties>({ visibility: 'collapse' })
    const [de, para] = extractFields()
    useLayoutEffect(() => {
        const img = giftRef.current
        if (img) {
            setTimeout(render, 10)
            window.addEventListener('resize', refresh)
            return () => {
                window.removeEventListener('resize', refresh)
            }
        }
        console.log(giftRef);
        function refresh() {
            setCnt((c) => (c + 1) % 1000)
        }
    }, [giftRef.current, cnt])
    return <div className={`app fill center container`} style={{ position: 'relative' }}>
        <img src={gift} className="gift" ref={giftRef} />
        <div style={deStyle}>{de}</div>
        <div style={paraStyle}>{para}</div>
    </div>;
    function render() {
        const img = giftRef.current
        if (!img) return
        const bounds = img.getBoundingClientRect()
        const left = bounds.left;
        const top = bounds.top;
        const height = bounds.bottom - top;
        const width = bounds.right - left;
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
    }
    function extractFields(): [string, string] {
        const hash = window.location.hash
        if (!hash.startsWith('#GIFT')) {
            return ['De', 'Para']
        }
        const fields = atob(hash.substring(5)).split('|')
        return [fields[0] || 'De', fields[1] || 'Para']
    }
}

