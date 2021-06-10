import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unsplash from './api/unsplash';

function App() {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const onSearchSubmit = (term) => {
    console.log('on sae', term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins
      ]

      newPins.sort(function(a, b){
        return 0.5 - Math.random();
      })
      setPins(newPins);
    })
  }

  const getNewPins = () => {
    let promise = [];
    let pinData = [];

    let pins = ['ocean', 'car', 'girl'];

    pins.forEach((pinTerm) => {
      promise.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);
          pinData.sort(function(a, b) {
            return 0.5 - Math.random();
          })
        })
      )
    })

    Promise.all(promise).then(() => {
      setPins(pinData);
    })
  }

  useEffect(() => {

    getNewPins();
  }, []);


  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard pins={pins}/>
    </div>
  );
}

export default App;
