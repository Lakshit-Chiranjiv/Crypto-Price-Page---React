import './App.css';
import React,{ useEffect,useState } from 'react';
import Header from './components/Header';
import CryptoContent from './components/CryptoContent';
import axios from 'axios'

function App() {

  const [cryptoArray,setCryptoArray] = useState([]);
  const [searchCrypto,setSearchCrypto] = useState("");

  useEffect(() => {
    getCryptoData();
  }, []);


  const getCryptoData = async () =>{
    let cryptoData = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");
    console.log(typeof(cryptoData.data.coins),cryptoData.data.coins);
    setCryptoArray(cryptoData.data.coins);
  }

  const setSearchTerm = (val) =>{
    setSearchCrypto(val);
  }

  const filteredCryptosArray = cryptoArray.filter((crypto) =>{
    return crypto.name.toLowerCase().includes(searchCrypto.toLowerCase());
  });


  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <CryptoContent filteredCryptosArray={filteredCryptosArray} />
      {/* <CoinCard/> */}
    </div>
  );
}

export default App;
