import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SetCardListResult } from './CardListResultContext'

export default function Search() {
    const [query, setQuery] = useState('');
    const setCardListResult = useContext(SetCardListResult);

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(
                `https://api.scryfall.com/cards/search?q=${query}`,
            );

            const cards = result.data.data.map(card => {
                return {
                    id: card.id,
                    name: card.name,
                    href: card.scryfall_uri,
                    imageSrc: card.image_uris ? card.image_uris.normal : card.card_faces[0].image_uris.normal,
                    imageAlt: card.flavor_text,
                }
            })

            setCardListResult({
                cards: cards
            })
        };

        if (query && query.length > 3) {
            fetchData();
        }
    }, [query, setCardListResult]);
    return (
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Search for cards
            </label>
            <input
                type="text"
                name="card-name"
                id="card-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={event => setQuery(event.target.value)}
            />
        </div>
    )
}
