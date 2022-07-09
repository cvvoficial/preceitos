import { DeckState } from '../state/dockState'
import { useEffect, useState } from 'react';
import './make-gift.css'

export function MakeGift({ deckState }: { deckState: DeckState }) {
    const [de, setDe] = useState(() => localStorage.getItem('de') || '')
    const [para, setPara] = useState(() => localStorage.getItem('para') || '')
    const [hash, setHash] = useState('')
    const [link, setLink] = useState('')
    useEffect(() => {
        localStorage.setItem('de', de)
        localStorage.setItem('para', para)
        const nhash = '#GIFT' + btoa(de + '|' + para)
        setHash(nhash)
        setLink(
            de && para ?
                window.location.origin + nhash
                : ''
        )
    }, [de, para])
    return <div className={`app fill center container`} style={{ position: 'relative' }}>
        <form className='make-gif'>
            <label htmlFor="de">
                De
            </label>
            <input id="de" type="text" value={de} onChange={e => setDe(e.target.value)} />
            <label htmlFor="para">
                Para
            </label>
            <input id="para" type="text" value={para} onChange={e => setPara(e.target.value)} />
            <div className='link'>
                link: <input id='link' value={link} />
            </div>
            <div className='buttons'>
                <button onClick={copy} disabled={!link}>Copiar link</button>
                <button onClick={preview} disabled={!link}>Visualizar</button>
            </div>
        </form>
    </div>;
    function preview(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        e.stopPropagation();
        deckState.setPage('gift')
        window.location.hash = hash
        setTimeout(() => window.location.reload(), 10)
        return false
    }
    function copy(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        e.stopPropagation();
        var copyText = document.getElementById("link") as HTMLInputElement;
        if (copyText) {
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
        } return false
    }
}

