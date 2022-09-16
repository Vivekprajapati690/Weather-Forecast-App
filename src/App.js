import './App.css';
import { useState, useEffect } from "react";
import moment from 'moment'
 

function App() {
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let [popup, setPopup] = useState(false);
 
  let [from, setFrom] = useState(1);
  let [to, setTo] = useState(6);
  let [isnextVisible, setIsNextVisible] = useState(true)
  let [isprevVisible, setIsprevVisible] = useState(true)
   
  
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);  
    setTimeout(() => {
      setActive(isActive);        
    }, 200);
    
  };
  let togglePopup = () =>{
    setPopup(!popup)
  }

  useEffect(()=>{
    if(from >= 11){
      setIsNextVisible(false)
    }else{
      setIsNextVisible(true)
    }
    if(to >= 7){      
      setIsprevVisible(false)
    }else{
      setIsprevVisible(true)
    }
  },[from, to])
 
  const firstItem = data?.data.slice(0, 1).map((day,key) =>
   <>
      <div key={day.moonrise_ts.toString()} className='row'>
        <div className='col-6 todays-data-main'>
           
            
              <div className='today-data'>
                
                <div>
                <div className='cst-ico'>
                  <img src={`/images/icons/${day.weather.icon}.png`} alt='Weather Icon' /> 
                  <span className='todays-temp'> <strong>{day.temp}</strong> <sup>C°</sup></span>
                </div>
                <div className='minmax_temp'>
                     <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 511.71"><path fill="#2B2727" d="M147.27 58.65c0-10.66-4.36-20.36-11.4-27.39-7.03-7.03-16.72-11.4-27.38-11.4s-20.35 4.37-27.39 11.4c-7.03 7.03-11.39 16.73-11.39 27.39V330.1c-26.87 13.78-45.25 41.75-45.25 74.02 0 45.92 37.22 83.14 83.14 83.14 45.91 0 83.13-37.22 83.13-83.14 0-31.55-17.57-58.99-43.46-73.08V58.65zm40.83 35.94v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm-20.97 23.34c28.97 19.28 48.06 52.22 48.06 89.63 0 59.42-48.17 107.59-107.59 107.59C48.17 511.71 0 463.54 0 404.12c0-38.17 19.88-71.69 49.84-90.79V58.65c0-16.14 6.6-30.81 17.22-41.43C77.69 6.59 92.35 0 108.49 0c16.13 0 30.8 6.59 41.43 17.22 10.62 10.62 17.21 25.29 17.21 41.43v255.84z"/><path fill="#EF1C25" d="M124.52 345.35c25.54 7.34 44.22 30.87 44.22 58.77 0 33.77-27.37 61.14-61.14 61.14-33.77 0-61.15-27.37-61.15-61.14 0-27.89 18.69-51.43 44.22-58.77V69.22c0-21.03 33.85-20.2 33.85 0v276.13z"/></svg>
                      {day.max_temp} 
                      </span>
                     <span className='mutted'>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 511.71"><path fill="#2B2727" d="M147.27 58.65c0-10.66-4.36-20.36-11.4-27.39-7.03-7.03-16.72-11.4-27.38-11.4s-20.35 4.37-27.39 11.4c-7.03 7.03-11.39 16.73-11.39 27.39V330.1c-26.87 13.78-45.25 41.75-45.25 74.02 0 45.92 37.22 83.14 83.14 83.14 45.91 0 83.13-37.22 83.13-83.14 0-31.55-17.57-58.99-43.46-73.08V58.65zm40.83 35.94v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm-20.97 23.34c28.97 19.28 48.06 52.22 48.06 89.63 0 59.42-48.17 107.59-107.59 107.59C48.17 511.71 0 463.54 0 404.12c0-38.17 19.88-71.69 49.84-90.79V58.65c0-16.14 6.6-30.81 17.22-41.43C77.69 6.59 92.35 0 108.49 0c16.13 0 30.8 6.59 41.43 17.22 10.62 10.62 17.21 25.29 17.21 41.43v255.84z"/><path fill="#0091D4" d="M124.52 345.35v-39.36H90.67v39.36c-25.53 7.34-44.22 30.88-44.22 58.77 0 33.77 27.38 61.14 61.15 61.14 33.76 0 61.14-27.37 61.14-61.14 0-27.9-18.68-51.43-44.22-58.77z"/></svg>
                      {day.min_temp} 
                      </span> 
                </div>
                </div>
                <div className='today-data'>
                  <span className='area-title'> <strong>{data?.city_name}</strong> , {data?.state_code}</span>
                  <p className='weather-description'> {day?.weather.description} </p>
                  <p className='today-date'>{ moment(day.valid_date).format('ddd')  } | {moment(day.valid_date).format('DD-MM-YY')} </p>
                </div>
                
              </div>          
              
          </div>
          <div className='col-6 flex-adjust'>
              <div className='d-flex w-100 justify-content-space-around align-item-center'>
                 
                <div className='d-flex flex-direction-column' >
                <div className='cst-ico'>
                  <img src={`/images/icons/${day.weather.icon}.png`} alt='Weather Icon' /> 
                  <span className='todays-temp'> <strong>{day.temp}</strong> <sup>C°</sup></span>
                </div>
                <div className='minmax_temp'>
                     <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 511.71"><path fill="#2B2727" d="M147.27 58.65c0-10.66-4.36-20.36-11.4-27.39-7.03-7.03-16.72-11.4-27.38-11.4s-20.35 4.37-27.39 11.4c-7.03 7.03-11.39 16.73-11.39 27.39V330.1c-26.87 13.78-45.25 41.75-45.25 74.02 0 45.92 37.22 83.14 83.14 83.14 45.91 0 83.13-37.22 83.13-83.14 0-31.55-17.57-58.99-43.46-73.08V58.65zm40.83 35.94v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm-20.97 23.34c28.97 19.28 48.06 52.22 48.06 89.63 0 59.42-48.17 107.59-107.59 107.59C48.17 511.71 0 463.54 0 404.12c0-38.17 19.88-71.69 49.84-90.79V58.65c0-16.14 6.6-30.81 17.22-41.43C77.69 6.59 92.35 0 108.49 0c16.13 0 30.8 6.59 41.43 17.22 10.62 10.62 17.21 25.29 17.21 41.43v255.84z"/><path fill="#EF1C25" d="M124.52 345.35c25.54 7.34 44.22 30.87 44.22 58.77 0 33.77-27.37 61.14-61.14 61.14-33.77 0-61.15-27.37-61.15-61.14 0-27.89 18.69-51.43 44.22-58.77V69.22c0-21.03 33.85-20.2 33.85 0v276.13z"/></svg>
                      {day.max_temp} <sub>Max</sub>
                      </span>
                     <span className='mutted'>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 511.71"><path fill="#2B2727" d="M147.27 58.65c0-10.66-4.36-20.36-11.4-27.39-7.03-7.03-16.72-11.4-27.38-11.4s-20.35 4.37-27.39 11.4c-7.03 7.03-11.39 16.73-11.39 27.39V330.1c-26.87 13.78-45.25 41.75-45.25 74.02 0 45.92 37.22 83.14 83.14 83.14 45.91 0 83.13-37.22 83.13-83.14 0-31.55-17.57-58.99-43.46-73.08V58.65zm40.83 35.94v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm0 49.14v-18H235a9 9 0 0 1 0 18h-46.9zm-20.97 23.34c28.97 19.28 48.06 52.22 48.06 89.63 0 59.42-48.17 107.59-107.59 107.59C48.17 511.71 0 463.54 0 404.12c0-38.17 19.88-71.69 49.84-90.79V58.65c0-16.14 6.6-30.81 17.22-41.43C77.69 6.59 92.35 0 108.49 0c16.13 0 30.8 6.59 41.43 17.22 10.62 10.62 17.21 25.29 17.21 41.43v255.84z"/><path fill="#0091D4" d="M124.52 345.35v-39.36H90.67v39.36c-25.53 7.34-44.22 30.88-44.22 58.77 0 33.77 27.38 61.14 61.15 61.14 33.76 0 61.14-27.37 61.14-61.14 0-27.9-18.68-51.43-44.22-58.77z"/></svg>
                      {day.min_temp} <sub>Min</sub>
                      </span> 
                </div>
                </div>
                
                <div>
                  <span className='area-title'> <strong>{data?.city_name}</strong> , {data?.state_code}</span>
                  <p className='weather-description'> {day?.weather.description} </p>
                  <p className='today-date'>{ moment(day.valid_date).format('ddd')  } | {moment(day.valid_date).format('DD-MM-YY')} </p>
                </div>
                
              </div>
              <div className='other-wether-data'>
                <div className='weather-inner-data weather-humidity'> <p>HUMIDITY</p> <p>{day?.rh} %</p>   </div>
                <div className='weather-inner-data weather-visibility'> <p>VISIBILITY</p> <p>{day?.vis} KM</p>  </div>
                <div className='weather-inner-data weather-dew-ponit'> <p>DEW POINT</p> <p>{day?.dewpt} °</p>   </div>
                <div className='weather-inner-data weather-presure'> <p>PRESSURE</p> <p>{day?.pres} mb</p>  </div>
                <div className='weather-inner-data weather-wind-speed'> <p>WIND</p> <p>{day?.wind_spd} m/s</p>   </div>
                
            </div>
          </div>
      </div>   
  </>
);

  const listItems = data?.data.slice(from, to).map((day,key) =>
    
   <li    className={`day `} key={day.moonrise_ts.toString()} onClick={()=>{
    setPopup(day)
   }}>
     
      <p className={`date-con ${isActive  ? "loading" : ""}`} >{ moment(day.valid_date).format('ddd')  } {moment(day.valid_date).format('DD')} </p>
      <div className='d-flex  justify-content-end'>
        <div  className={`w-40 d-flex align-item-center  justify-content-center ${isActive  ? "loading" : ""}`}>
            <img className={` ${isActive  ? "loading" : ""}`} src={`/images/icons/${day.weather.icon}.png`} alt='Weather Icon' />          
        </div>
        <div className={`w-40 ${isActive  ? "loading" : ""}`} >
            <p>{day.max_temp} C°<sub>Max</sub></p>
            <p className='mutted'>{day.min_temp} C°<sub>Min</sub></p>
        </div>
      </div>
      
      
       
     
     
       
      <p className={` ${isActive  ? "loading" : ""}`}>{day.weather.description}</p>
      
    </li>
  );


useEffect(() => {
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=53.9614&lon=-1.0739&key=a9ff03b3cd404cf98d3c94dfc571e6c0`)
   .then((response) => response.json())
   .then((actualData) => {
    setData(actualData);
    setError(null);
  })
  .catch((err) => {
    setError(err.message);
    setData(null);
  }).finally(() => {
    setLoading(false);
  });
   setData(data)     
 }, []);
 

 return (

  <>
  <div className="App">
    <div className='container'>
    <h1>Today's Weather</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error}`}</div>
      )}
    </div>
    <div className='container'>     
        {firstItem}
    </div>    
    <div className='container pos-relative'>
        <h1>Future Forecast</h1>

    { data && <div className='next-prev-con '> 
        <div className='push-up'>
          <button  className={`btn ${isprevVisible ? "hidden" : "show"}`} onClick={()=>{
            setFrom(from - 5)
            setTo(to - 5)   
            toggleClass()     
        }}> {'<'}  </button>
        </div>
        <div className='push-up'>
          <button className={`btn ${isnextVisible ? "show" : "hidden"}`} onClick={()=>{       
          setFrom(from + 5)
          setTo(to + 5)      
          toggleClass()
        }}> {'>'} </button>   
        </div>      
    </div>  }
      <ul className='days'>
        {listItems}
      </ul>
      
    </div>      
    
       
  </div>
  {popup &&  
    <div className={`popup ${ popup  ? "show" : "hide"}`}>
      
        <div className='popup-body'>
        <div className='btn pos-absolute cls-btn' onClick={(prop)=>{
           togglePopup()
          }}>x</div>
       <div className='other-wether-data'>
                <p className='date-con ' >{ moment(popup.valid_date).format('ddd')  } {moment(popup.valid_date).format('DD')} </p>
                <div className='weather-inner-data weather-humidity'> <p>HUMIDITY</p> <p>{popup?.rh} %</p>   </div>
                <div className='weather-inner-data weather-visibility'> <p>VISIBILITY</p> <p>{popup?.vis} KM</p>  </div>
                <div className='weather-inner-data weather-dew-ponit'> <p>DEW POINT</p> <p>{popup?.dewpt} °</p>   </div>
                <div className='weather-inner-data weather-presure'> <p>PRESSURE</p> <p>{popup?.pres} mb</p>  </div>
                <div className='weather-inner-data weather-wind-speed'> <p>WIND</p> <p>{popup?.wind_spd} m/s</p>   </div>                
      </div>
      </div>
    </div>
  }
  </>
  
);

}

export default App;
