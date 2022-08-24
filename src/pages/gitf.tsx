import { DeckState } from '../state/dockState'
import './gift.css'
import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import { GiftImage } from '../images/gift'

export function Gift() {
    const giftRef = useRef<HTMLImageElement>(null)
    const [de, para] = extractFields()
    return <div className={`app fill center container gift-container`} onClick={openGift}>
        <GiftImage className="gift-box" />
        <div className="gift-texts">
            <div className="gift-para">
                Para:<br />
                <span className="gift-text">
                    {para}
                </span>
            </div>
            <div className="gift-de">
                De:<br />
                <span className="gift-text">
                    {de}
                </span>
            </div>
        </div>
        <div className="gift-open">
            Clique para abrir seu presente
        </div>
    </div>;
    function openGift() {
        window.location.hash = ''
        setTimeout(() => window.location.reload(), 10)
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

