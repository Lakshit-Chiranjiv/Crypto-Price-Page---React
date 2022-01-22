import React from 'react';
import CoinCard from './CoinCard';
import "./../css/cryptocontent.style.css";

const CryptoContent = ({filteredCryptosArray}) => {
    return (
        <div className="content-center">
            <div className='content'>
                {filteredCryptosArray.map((crypto,i) =>{
                    return <CoinCard key={i} cryptoName={crypto.name} cryptoPrice={crypto.price} cryptoImg={crypto.icon} cryptoSymbol={crypto.symbol} cryptoChange={crypto.priceChange1d} />;
                })}
            </div>
        </div>
    );
};

export default CryptoContent;
