import image from "./assets/sunset2.jpg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
// import apiid from "./id.env";

function App() {
  const [searchTerm,setSearchterm]=useState("");
  const [data,setdata]=useState({});
  


  const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=f3b83c3acab396bdab3b4b22059097f3`;



const searchlocation=(event)=>{
  if (event.key==="Enter"){
  axios.get(url).then((response)=>{
    setdata(response.data)
    console.log(data)
  })
}
}

  return (
    <div
      className="app p-5 absolute h-full w-full bg-no-repeat bg-cover bg-center overflow-hidden  z-[-1]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-center m-5">
        <div className="searchbar">
          <input
            type="text"
            value={searchTerm}
            onChange={event=>setSearchterm(event.target.value)}
            onKeyDown={searchlocation}
            className="rounded-lg p-2 mb-24 sm:w-36 md:w-96 border-none"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            placeholder="Enter Location.."
          />
        </div>
      </div>
      <div className="container text-white h-full max-w-full relative flex-col pl-2 ">
        <div className="top">
          <div className="location">
            <p className=" sm:text-6xl text-4xl font-semibold">{data?data.name:null}</p>
          </div>
          <div className="pt-3 temperature">
            {data.main? <p className="sm:text-8xl text-7xl font-bold">{data.main?data.main.temp:"temperature"}°C</p>:null}
            
          </div>

          <div className="description relative right-[-93%] -rotate-90" style={{transformOrigin:"0 0"}}>
            {data.weather?<p className="font-bold sm:text-5xl text-4xl">{data.weather[0].main}</p>:null}
            
          </div>
        </div>

        <div className="flex justify-center align-bottom mt-24">
          <div
            className="bottomcontent flex sm:space-x-5 space-x-2 rounded-lg sm:w-1/2 w-full  p-5 m-2 justify-evenly self-center text-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <div className="feelsLike ">
              {data.main?<p className="font-bold text-black">{data.main.feels_like}°C</p>:null}
              <p className="font-bold">Feels Like</p>
            </div>
            <div className="Humidity ">
              
              {data.main?<p className="font-bold pl-6 text-black">{data.main.humidity}</p> :null}
              <p className="font-bold">Humidity</p>

            </div>
            <div className="windSpeed ">
              {data.wind?<p className="font-bold  text-black">{data.wind.speed}MPH</p>:null} <p className="font-bold">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
