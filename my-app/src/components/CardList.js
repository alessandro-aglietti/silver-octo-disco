import { useContext } from 'react';
import CardListResultContext from './CardListResultContext';

export default function CardList() {
    const cards = useContext(CardListResultContext).cards;
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cards.map((product) => (
                <div key={product.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
