import React, { useState } from 'react';
import house_img from './assets/house_img.jpg';
import { useEffect } from 'react';


const App = () => {
  const [locations, setLocations] = useState([])
  const [predictedPrice, setPredictedPrice] = useState()

  const onChangeSelect = (e) => {
    console.log(e.target.value)
  }

  const onClickedEstimatePrice = () => {
    console.log("Estimate Price Button Clicked")
  }

  return (
    <div >
      <form className=' text-center'>
        <h2>Area (Square Feet)</h2>
        <input type="text" />
        <h2>BHK</h2>
        <div >
          <input type="radio" id="radio-bhk-1" name="uiBHK" value="1"/>
          <label for="radio-bhk-1">1</label>
          <input type="radio" id="radio-bhk-2" name="uiBHK" value="2" checked/>
          <label for="radio-bhk-2">2</label>
          <input type="radio" id="radio-bhk-3" name="uiBHK" value="3"/>
          <label for="radio-bhk-3">3</label>
          <input type="radio" id="radio-bhk-4" name="uiBHK" value="4"/>
          <label for="radio-bhk-4">4</label>
          <input type="radio" id="radio-bhk-5" name="uiBHK" value="5"/>
          <label for="radio-bhk-5">5</label>
        </div>
      </form>

      <form className=' text-center'>
        <h2>Bathrooms</h2>
        <div >
          <input type="radio" id="radio-bath-1" name="uiBathrooms" value="1"/>
          <label for="radio-bath-1">1</label>
          <input type="radio" id="radio-bath-2" name="uiBathrooms" value="2" checked/>
          <label for="radio-bath-2">2</label>
          <input type="radio" id="radio-bath-3" name="uiBathrooms" value="3"/>
          <label for="radio-bath-3">3</label>
          <input type="radio" id="radio-bath-4" name="uiBathrooms" value="4"/>
          <label for="radio-bath-4">4</label>
          <input type="radio" id="radio-bath-5" name="uiBathrooms" value="5"/>
          <label for="radio-bath-5">5</label>
        </div>
        <h2>Locaiton</h2>
        <div>
          <select>
            <option value={locations} onChange={onChangeSelect}>Choose a Location</option>
          </select>
        </div>
        <button className=' bg-blue-300 w-40' onclick={onClickedEstimatePrice} type="button">Estimate Price</button>
        <div className='flex justify-center'>
          <div className=' bg-green-400 w-40 '>{predictedPrice}  24 <span>Lakh</span></div>
        </div>
        <h1 className= 'text-center'>hi</h1>
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