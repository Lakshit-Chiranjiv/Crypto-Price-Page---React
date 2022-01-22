import React from 'react';
import './../css/coincard.style.css';

const CoinCard = ({cryptoName,cryptoPrice,cryptoImg,cryptoSymbol,cryptoChange}) => {
    return (
        <div className='coincard'>
            <h2>{cryptoName.length>30?cryptoName.slice(-14):cryptoName}</h2>
            <h5>{cryptoSymbol}</h5>
            <img src={cryptoImg} alt="coinImg" />
            <h4>{cryptoPrice} USD</h4>
            <p className={cryptoChange>=0?"green":"red"} >{cryptoChange}%</p>
        </div>
    );
};

export default CoinCard;
