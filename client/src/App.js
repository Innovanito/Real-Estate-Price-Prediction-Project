import React, { useState } from 'react';
import house_img from './assets/house_img.jpg';
import { useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [area, setArea] = useState()
  const [bhk, setBhk] = useState()
  const [bathrooms, setBathrooms] = useState()
  const [location, setLocation] = useState([])
  const [selectedLoc, setSelectedLoc] = useState()
  const [predictedPrice, setPredictedPrice] = useState()



  useEffect(() => {
    console.log("Area: ", area, typeof(area))
    console.log("BHK: ", bhk, typeof(bhk))
    console.log("Bathrooms: ", bathrooms, typeof(bathrooms))
    console.log("Location: ", location, typeof(location))
    console.log("Selected Location:", selectedLoc, typeof(selectedLoc))
    console.log("Predicted Price: ", predictedPrice, typeof(predictedPrice))
  }, [area, bhk, bathrooms, location, selectedLoc, predictedPrice])

  useEffect(() => {
    if (area && bhk && bathrooms && selectedLoc) {
      axios.post('http://127.0.0.1:5000/predict_home_price', {
        total_sqft: area,
        bhk: bhk,
        bath: bathrooms,
        location: selectedLoc
      }).then(
        res => {
          console.log('predicted price:', res)
          setPredictedPrice(res.data.estimated_price)
        }
      ).catch(err => {
        console.log('error occured!')
        console.log(err)
      })
    }
  }, [area, bhk, bathrooms, location, selectedLoc])

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/get_location_names')
      .then(res => {
        console.log('res', res)
        setLocation(res.data.locations)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  
  

  return (
    <div className=' flex flex-col justify-center items-center' >
      <h1 className='mt-10 text-4xl'>Banglore Home price prediction Web</h1>
      <form className='flex flex-col justify-center items-center'>
        <h2 className=' text-3xl p-5 mt-10'>Area (Square Feet)</h2>
        <input type="number"  className=' text-3xl mb-3 rounded-lg p-2 ' onChange={e => setArea(parseInt(e.target.value))} />
        <h2 className=' text-2xl mb-2'>Choose your BHK</h2>
        
        <ul className="items-center text-sm font-medium text-gray-200 bg-white-border border border-gray-500 rounded-lg sm:flex bg-cyan-100">
          <li className="w-14 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-radio-license" onChange={e => setBhk(parseInt(e.target.value))} type="radio" value="1" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-100 dark:focus:ring-offset-gray-200 focus:ring-2 dark:bg-gray-200 dark:border-gray-200"/>
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">1 </label>
              </div>
          </li>
          <li className="w-14 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-id" onChange={e => setBhk(parseInt(e.target.value))} type="radio" value="2" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">2</label>
              </div>
          </li>
          <li className="w-14 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-millitary" onChange={e => setBhk(parseInt(e.target.value))} type="radio" value="3" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">3</label>
              </div>
          </li>
          <li className="w-14 dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-passport" onChange={e => setBhk(parseInt(e.target.value))} type="radio" value="4" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">4</label>
              </div>
          </li>
          <li className="w-16 dark:border-gray-600 sm:border-l">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-passport" onChange={e => setBhk(parseInt(e.target.value))} type="radio" value="5" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">5</label>
              </div>
          </li>
        </ul>
      </form>

      <form className='flex flex-col justify-center items-center mt-5'>
        <h2 className=' text-2xl mb-2'>Choose your Bathrooms</h2>
        
        <ul className="items-center w-full text-lg font-medium text-gray-200 bg-white- border border-gray-500 rounded-lg sm:flex bg-cyan-100">
          <li className="w-14 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 ">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-radio-license" onChange={e => setBathrooms(parseInt(e.target.value))} type="radio" value="1" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-100 dark:focus:ring-offset-gray-200 focus:ring-2 dark:bg-gray-200 dark:border-gray-200"/>
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">1 </label>
              </div>
          </li>
          <li className="w-14 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-id" onChange={e => setBathrooms(parseInt(e.target.value))} type="radio" value="2" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">2</label>
              </div>
          </li>
          <li className="w-14 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-millitary" onChange={e => setBathrooms(parseInt(e.target.value))} type="radio" value="3" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">3</label>
              </div>
          </li>
          <li className="w-14 dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-passport" onChange={e => setBathrooms(parseInt(e.target.value))} type="radio" value="4" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">4</label>
              </div>
          </li>
          <li className=" w-14 dark:border-gray-600 sm:border-l">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-passport" onChange={e => setBathrooms(parseInt(e.target.value))} type="radio" value="5" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">5</label>
              </div>
          </li>
        </ul>
        <h2 className=' mt-5 text-2xl'>Choose your Locaiton</h2>
        <select id="countries" onChange={e =>setSelectedLoc(e.target.value.trim())} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled >Where do you want to search?</option>
          {/* map through location to make multiple option tag */}
          {location.map((loc, index) => {
            return (
              <option key={index} value={loc}>{loc}</option>
            )
          })}
        </select>
        <button className=' bg-blue-300 w-60 rounded-lg pointer-events-auto my-8 text-2xl border border-green-200 p-2' type="button">Estimate the price!</button>
        <div className='flex justify-center '>
          <div className=' bg-green-400 w-60 rounded-lg text-center text-lg p-2'>{predictedPrice}  <span>Lakh</span></div>
        </div>
      </form>

      <div
        style={{ backgroundImage: `url(${house_img})` }}
        className='absolute left-0 top-0 h-screen w-screen bg-cover bg-center blur-sm -z-10 opacity-50 '
      >
      </div>
    </div>
  )
}

export default App