import { createContext, useState } from 'react';
const CardListResultContext = createContext(null);
export const SetCardListResult = createContext(null);

export function CardListResultProvider({ children }) {
    const [cardListResult, setCardListResult] = useState({
        cards: []
    });
  
    return (
      <CardListResultContext.Provider value={cardListResult}>
        <SetCardListResult.Provider value={setCardListResult}>
          {children}
        </SetCardListResult.Provider>
      </CardListResultContext.Provider>
    );
  }

export default CardListResultContext
