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


//   data = {
//     "data": [
//         {
//             "moonrise_ts": 1663184843,
//             "wind_cdir": "SSW",
//             "rh": 81,
//             "pres": 1005.9,
//             "high_temp": 18,
//             "sunset_ts": 1663179643,
//             "ozone": 280.4,
//             "moon_phase": 0.726507,
//             "wind_gust_spd": 4.2,
//             "snow_depth": 0,
//             "clouds": 28,
//             "ts": 1663110060,
//             "sunrise_ts": 1663133688,
//             "app_min_temp": 8.6,
//             "wind_spd": 1.8,
//             "pop": 0,
//             "wind_cdir_full": "south-southwest",
//             "moon_phase_lunation": 0.63,
//             "slp": 1008.3,
//             "app_max_temp": 18,
//             "valid_date": "2022-09-14",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 9.8,
//             "uv": 4.3,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 802,
//                 "description": "Scattered clouds"
//             },
//             "wind_dir": 205,
//             "max_dhi": null,
//             "clouds_hi": 18,
//             "precip": 0,
//             "low_temp": 11,
//             "max_temp": 18,
//             "moonset_ts": 1663156788,
//             "datetime": "2022-09-14",
//             "temp": 13.3,
//             "min_temp": 8.6,
//             "clouds_mid": 1,
//             "clouds_low": 43
//         },
//         {
//             "moonrise_ts": 1663272244,
//             "wind_cdir": "WSW",
//             "rh": 69,
//             "pres": 1009.9,
//             "high_temp": 16.5,
//             "sunset_ts": 1663265894,
//             "ozone": 284.2,
//             "moon_phase": 0.629578,
//             "wind_gust_spd": 6.2,
//             "snow_depth": 0,
//             "clouds": 39,
//             "ts": 1663196460,
//             "sunrise_ts": 1663220195,
//             "app_min_temp": 10.8,
//             "wind_spd": 2.9,
//             "pop": 0,
//             "wind_cdir_full": "west-southwest",
//             "moon_phase_lunation": 0.66,
//             "slp": 1012.3,
//             "app_max_temp": 16.5,
//             "valid_date": "2022-09-15",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 7.5,
//             "uv": 4,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 802,
//                 "description": "Scattered clouds"
//             },
//             "wind_dir": 257,
//             "max_dhi": null,
//             "clouds_hi": 10,
//             "precip": 0,
//             "low_temp": 7,
//             "max_temp": 16.5,
//             "moonset_ts": 1663247862,
//             "datetime": "2022-09-15",
//             "temp": 13.4,
//             "min_temp": 10.8,
//             "clouds_mid": 36,
//             "clouds_low": 43
//         },
//         {
//             "moonrise_ts": 1663360003,
//             "wind_cdir": "NNW",
//             "rh": 65,
//             "pres": 1014.5,
//             "high_temp": 14.7,
//             "sunset_ts": 1663352144,
//             "ozone": 305.5,
//             "moon_phase": 0.529884,
//             "wind_gust_spd": 9.8,
//             "snow_depth": 0,
//             "clouds": 2,
//             "ts": 1663282860,
//             "sunrise_ts": 1663306702,
//             "app_min_temp": 3.9,
//             "wind_spd": 4.7,
//             "pop": 0,
//             "wind_cdir_full": "north-northwest",
//             "moon_phase_lunation": 0.7,
//             "slp": 1016.9,
//             "app_max_temp": 14.7,
//             "valid_date": "2022-09-16",
//             "vis": 24.067,
//             "snow": 0,
//             "dewpt": 4,
//             "uv": 4.2,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 801,
//                 "description": "Few clouds"
//             },
//             "wind_dir": 327,
//             "max_dhi": null,
//             "clouds_hi": 0,
//             "precip": 0,
//             "low_temp": 5.8,
//             "max_temp": 14.7,
//             "moonset_ts": 1663338572,
//             "datetime": "2022-09-16",
//             "temp": 10.5,
//             "min_temp": 7,
//             "clouds_mid": 9,
//             "clouds_low": 13
//         },
//         {
//             "moonrise_ts": 1663448309,
//             "wind_cdir": "NW",
//             "rh": 62,
//             "pres": 1018.2,
//             "high_temp": 15.8,
//             "sunset_ts": 1663438394,
//             "ozone": 290.7,
//             "moon_phase": 0.43115,
//             "wind_gust_spd": 8.3,
//             "snow_depth": 0,
//             "clouds": 17,
//             "ts": 1663369260,
//             "sunrise_ts": 1663393209,
//             "app_min_temp": 2.4,
//             "wind_spd": 4.7,
//             "pop": 0,
//             "wind_cdir_full": "northwest",
//             "moon_phase_lunation": 0.73,
//             "slp": 1021.6,
//             "app_max_temp": 15.8,
//             "valid_date": "2022-09-17",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 3.1,
//             "uv": 3.8,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 801,
//                 "description": "Few clouds"
//             },
//             "wind_dir": 309,
//             "max_dhi": null,
//             "clouds_hi": 26,
//             "precip": 0,
//             "low_temp": 8.6,
//             "max_temp": 15.8,
//             "moonset_ts": 1663428655,
//             "datetime": "2022-09-17",
//             "temp": 10.6,
//             "min_temp": 5.8,
//             "clouds_mid": 15,
//             "clouds_low": 3
//         },
//         {
//             "moonrise_ts": 1663537351,
//             "wind_cdir": "SW",
//             "rh": 71,
//             "pres": 1018,
//             "high_temp": 16.5,
//             "sunset_ts": 1663524645,
//             "ozone": 284.7,
//             "moon_phase": 0.336466,
//             "wind_gust_spd": 8.3,
//             "snow_depth": 0,
//             "clouds": 69,
//             "ts": 1663455660,
//             "sunrise_ts": 1663479716,
//             "app_min_temp": 8.6,
//             "wind_spd": 4.4,
//             "pop": 20,
//             "wind_cdir_full": "southwest",
//             "moon_phase_lunation": 0.77,
//             "slp": 1021.7,
//             "app_max_temp": 16.4,
//             "valid_date": "2022-09-18",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 6.7,
//             "uv": 3.1,
//             "weather": {
//                 "icon": "c03d",
//                 "code": 803,
//                 "description": "Broken clouds"
//             },
//             "wind_dir": 229,
//             "max_dhi": null,
//             "clouds_hi": 50,
//             "precip": 0.125,
//             "low_temp": 9.4,
//             "max_temp": 16.5,
//             "moonset_ts": 1663517927,
//             "datetime": "2022-09-18",
//             "temp": 12,
//             "min_temp": 8.6,
//             "clouds_mid": 42,
//             "clouds_low": 37
//         },
//         {
//             "moonrise_ts": 1663627195,
//             "wind_cdir": "NW",
//             "rh": 68,
//             "pres": 1023.1,
//             "high_temp": 17.4,
//             "sunset_ts": 1663610895,
//             "ozone": 279.5,
//             "moon_phase": 0.248461,
//             "wind_gust_spd": 2.7,
//             "snow_depth": 0,
//             "clouds": 86,
//             "ts": 1663542060,
//             "sunrise_ts": 1663566223,
//             "app_min_temp": 10.3,
//             "wind_spd": 2,
//             "pop": 20,
//             "wind_cdir_full": "northwest",
//             "moon_phase_lunation": 0.8,
//             "slp": 1026.9,
//             "app_max_temp": 17.3,
//             "valid_date": "2022-09-19",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 7.7,
//             "uv": 4.1,
//             "weather": {
//                 "icon": "c04d",
//                 "code": 804,
//                 "description": "Overcast clouds"
//             },
//             "wind_dir": 309,
//             "max_dhi": null,
//             "clouds_hi": 19,
//             "precip": 0.0625,
//             "low_temp": 10.5,
//             "max_temp": 17.4,
//             "moonset_ts": 1663606411,
//             "datetime": "2022-09-19",
//             "temp": 13.7,
//             "min_temp": 9.4,
//             "clouds_mid": 8,
//             "clouds_low": 80
//         },
//         {
//             "moonrise_ts": 1663631295,
//             "wind_cdir": "W",
//             "rh": 72,
//             "pres": 1022.9,
//             "high_temp": 20.4,
//             "sunset_ts": 1663697146,
//             "ozone": 279.4,
//             "moon_phase": 0.169637,
//             "wind_gust_spd": 3.1,
//             "snow_depth": 0,
//             "clouds": 48,
//             "ts": 1663628460,
//             "sunrise_ts": 1663652730,
//             "app_min_temp": 10.6,
//             "wind_spd": 2.4,
//             "pop": 0,
//             "wind_cdir_full": "west",
//             "moon_phase_lunation": 0.83,
//             "slp": 1026.5,
//             "app_max_temp": 19.6,
//             "valid_date": "2022-09-20",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 8.9,
//             "uv": 4,
//             "weather": {
//                 "icon": "c03d",
//                 "code": 803,
//                 "description": "Broken clouds"
//             },
//             "wind_dir": 271,
//             "max_dhi": null,
//             "clouds_hi": 53,
//             "precip": 0,
//             "low_temp": 8.9,
//             "max_temp": 20.4,
//             "moonset_ts": 1663694286,
//             "datetime": "2022-09-20",
//             "temp": 14.3,
//             "min_temp": 10.4,
//             "clouds_mid": 42,
//             "clouds_low": 8
//         },
//         {
//             "moonrise_ts": 1663717695,
//             "wind_cdir": "WSW",
//             "rh": 69,
//             "pres": 1021.4,
//             "high_temp": 19.8,
//             "sunset_ts": 1663783396,
//             "ozone": 265.2,
//             "moon_phase": 0.102663,
//             "wind_gust_spd": 2.2,
//             "snow_depth": 0,
//             "clouds": 55,
//             "ts": 1663714860,
//             "sunrise_ts": 1663739237,
//             "app_min_temp": 8.9,
//             "wind_spd": 1.8,
//             "pop": 0,
//             "wind_cdir_full": "west-southwest",
//             "moon_phase_lunation": 0.87,
//             "slp": 1025.1,
//             "app_max_temp": 18.9,
//             "valid_date": "2022-09-21",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 7.8,
//             "uv": 4,
//             "weather": {
//                 "icon": "c03d",
//                 "code": 803,
//                 "description": "Broken clouds"
//             },
//             "wind_dir": 246,
//             "max_dhi": null,
//             "clouds_hi": 97,
//             "precip": 0,
//             "low_temp": 11.2,
//             "max_temp": 19.8,
//             "moonset_ts": 1663781751,
//             "datetime": "2022-09-21",
//             "temp": 13.9,
//             "min_temp": 8.9,
//             "clouds_mid": 44,
//             "clouds_low": 0
//         },
//         {
//             "moonrise_ts": 1663808586,
//             "wind_cdir": "SW",
//             "rh": 65,
//             "pres": 1018.3,
//             "high_temp": 22.8,
//             "sunset_ts": 1663869647,
//             "ozone": 264.7,
//             "moon_phase": 0.0504027,
//             "wind_gust_spd": 4.3,
//             "snow_depth": 0,
//             "clouds": 4,
//             "ts": 1663801260,
//             "sunrise_ts": 1663825745,
//             "app_min_temp": 11.2,
//             "wind_spd": 3.5,
//             "pop": 0,
//             "wind_cdir_full": "southwest",
//             "moon_phase_lunation": 0.9,
//             "slp": 1022.2,
//             "app_max_temp": 21.7,
//             "valid_date": "2022-09-22",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 8.7,
//             "uv": 4,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 801,
//                 "description": "Few clouds"
//             },
//             "wind_dir": 218,
//             "max_dhi": null,
//             "clouds_hi": 16,
//             "precip": 0,
//             "low_temp": 10.9,
//             "max_temp": 22.8,
//             "moonset_ts": 1663868960,
//             "datetime": "2022-09-22",
//             "temp": 15.9,
//             "min_temp": 11.2,
//             "clouds_mid": 2,
//             "clouds_low": 0
//         },
//         {
//             "moonrise_ts": 1663899640,
//             "wind_cdir": "WNW",
//             "rh": 68,
//             "pres": 1022.1,
//             "high_temp": 19.6,
//             "sunset_ts": 1663955898,
//             "ozone": 284.7,
//             "moon_phase": 0.015731,
//             "wind_gust_spd": 3.4,
//             "snow_depth": 0,
//             "clouds": 39,
//             "ts": 1663887660,
//             "sunrise_ts": 1663912253,
//             "app_min_temp": 11.3,
//             "wind_spd": 2.5,
//             "pop": 0,
//             "wind_cdir_full": "west-northwest",
//             "moon_phase_lunation": 0.94,
//             "slp": 1025.9,
//             "app_max_temp": 18.6,
//             "valid_date": "2022-09-23",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 8.2,
//             "uv": 3.9,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 802,
//                 "description": "Scattered clouds"
//             },
//             "wind_dir": 302,
//             "max_dhi": null,
//             "clouds_hi": 30,
//             "precip": 0,
//             "low_temp": 9.8,
//             "max_temp": 19.6,
//             "moonset_ts": 1663956018,
//             "datetime": "2022-09-23",
//             "temp": 14.7,
//             "min_temp": 10.9,
//             "clouds_mid": 26,
//             "clouds_low": 11
//         },
//         {
//             "moonrise_ts": 1663990737,
//             "wind_cdir": "W",
//             "rh": 74,
//             "pres": 1018.5,
//             "high_temp": 18.8,
//             "sunset_ts": 1664042149,
//             "ozone": 274.8,
//             "moon_phase": 0.00122652,
//             "wind_gust_spd": 11.9,
//             "snow_depth": 0,
//             "clouds": 25,
//             "ts": 1663974060,
//             "sunrise_ts": 1663998760,
//             "app_min_temp": 11.9,
//             "wind_spd": 5.6,
//             "pop": 20,
//             "wind_cdir_full": "west",
//             "moon_phase_lunation": 0.97,
//             "slp": 1022.3,
//             "app_max_temp": 15.5,
//             "valid_date": "2022-09-24",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 9.1,
//             "uv": 4,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 802,
//                 "description": "Scattered clouds"
//             },
//             "wind_dir": 261,
//             "max_dhi": null,
//             "clouds_hi": 100,
//             "precip": 0.125,
//             "low_temp": 13.8,
//             "max_temp": 18.8,
//             "moonset_ts": 1664043002,
//             "datetime": "2022-09-24",
//             "temp": 13.7,
//             "min_temp": 9.8,
//             "clouds_mid": 10,
//             "clouds_low": 5
//         },
//         {
//             "moonrise_ts": 1664081847,
//             "wind_cdir": "W",
//             "rh": 79,
//             "pres": 1013,
//             "high_temp": 21,
//             "sunset_ts": 1664128400,
//             "ozone": 271,
//             "moon_phase": 0.008834,
//             "wind_gust_spd": 15.4,
//             "snow_depth": 0,
//             "clouds": 83,
//             "ts": 1664060460,
//             "sunrise_ts": 1664085268,
//             "app_min_temp": 15.4,
//             "wind_spd": 8.1,
//             "pop": 0,
//             "wind_cdir_full": "west",
//             "moon_phase_lunation": 0,
//             "slp": 1017,
//             "app_max_temp": 17.2,
//             "valid_date": "2022-09-25",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 12.7,
//             "uv": 3.9,
//             "weather": {
//                 "icon": "c04d",
//                 "code": 804,
//                 "description": "Overcast clouds"
//             },
//             "wind_dir": 279,
//             "max_dhi": null,
//             "clouds_hi": 100,
//             "precip": 0,
//             "low_temp": 16.4,
//             "max_temp": 21,
//             "moonset_ts": 1664129971,
//             "datetime": "2022-09-25",
//             "temp": 16.3,
//             "min_temp": 13.8,
//             "clouds_mid": 53,
//             "clouds_low": 37
//         },
//         {
//             "moonrise_ts": 1664173003,
//             "wind_cdir": "WNW",
//             "rh": 78,
//             "pres": 1008.8,
//             "high_temp": 21.4,
//             "sunset_ts": 1664214651,
//             "ozone": 269.8,
//             "moon_phase": 0.0395426,
//             "wind_gust_spd": 13.1,
//             "snow_depth": 0,
//             "clouds": 34,
//             "ts": 1664146860,
//             "sunrise_ts": 1664171777,
//             "app_min_temp": 16.8,
//             "wind_spd": 6.6,
//             "pop": 20,
//             "wind_cdir_full": "west-northwest",
//             "moon_phase_lunation": 0.04,
//             "slp": 1012.3,
//             "app_max_temp": 17.6,
//             "valid_date": "2022-09-26",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 13.2,
//             "uv": 3.9,
//             "weather": {
//                 "icon": "c02d",
//                 "code": 802,
//                 "description": "Scattered clouds"
//             },
//             "wind_dir": 295,
//             "max_dhi": null,
//             "clouds_hi": 2,
//             "precip": 0.125,
//             "low_temp": 14.6,
//             "max_temp": 21.4,
//             "moonset_ts": 1664216986,
//             "datetime": "2022-09-26",
//             "temp": 17.2,
//             "min_temp": 16.4,
//             "clouds_mid": 6,
//             "clouds_low": 34
//         },
//         {
//             "moonrise_ts": 1664264269,
//             "wind_cdir": "ENE",
//             "rh": 73,
//             "pres": 1014.3,
//             "high_temp": 18.2,
//             "sunset_ts": 1664300903,
//             "ozone": 270.1,
//             "moon_phase": 0.0931373,
//             "wind_gust_spd": 5.3,
//             "snow_depth": 0,
//             "clouds": 81,
//             "ts": 1664233260,
//             "sunrise_ts": 1664258285,
//             "app_min_temp": 14.7,
//             "wind_spd": 2.9,
//             "pop": 10,
//             "wind_cdir_full": "east-northeast",
//             "moon_phase_lunation": 0.07,
//             "slp": 1018.3,
//             "app_max_temp": 15.2,
//             "valid_date": "2022-09-27",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 9.9,
//             "uv": 3.8,
//             "weather": {
//                 "icon": "c04d",
//                 "code": 804,
//                 "description": "Overcast clouds"
//             },
//             "wind_dir": 66,
//             "max_dhi": null,
//             "clouds_hi": 52,
//             "precip": 0.1875,
//             "low_temp": 13.1,
//             "max_temp": 18.2,
//             "moonset_ts": 1664304122,
//             "datetime": "2022-09-27",
//             "temp": 14.9,
//             "min_temp": 14.6,
//             "clouds_mid": 1,
//             "clouds_low": 81
//         },
//         {
//             "moonrise_ts": 1664355712,
//             "wind_cdir": "SW",
//             "rh": 81,
//             "pres": 1013.8,
//             "high_temp": 21.3,
//             "sunset_ts": 1664387154,
//             "ozone": 271.3,
//             "moon_phase": 0.168067,
//             "wind_gust_spd": 5.2,
//             "snow_depth": 0,
//             "clouds": 63,
//             "ts": 1664319660,
//             "sunrise_ts": 1664344793,
//             "app_min_temp": 13.8,
//             "wind_spd": 2.8,
//             "pop": 20,
//             "wind_cdir_full": "southwest",
//             "moon_phase_lunation": 0.1,
//             "slp": 1017.8,
//             "app_max_temp": 15.6,
//             "valid_date": "2022-09-28",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 11.2,
//             "uv": 3.8,
//             "weather": {
//                 "icon": "c03d",
//                 "code": 803,
//                 "description": "Broken clouds"
//             },
//             "wind_dir": 234,
//             "max_dhi": null,
//             "clouds_hi": 100,
//             "precip": 0.125,
//             "low_temp": 11,
//             "max_temp": 21.3,
//             "moonset_ts": 1664391492,
//             "datetime": "2022-09-28",
//             "temp": 14.7,
//             "min_temp": 13.1,
//             "clouds_mid": 2,
//             "clouds_low": 50
//         },
//         {
//             "moonrise_ts": 1664447360,
//             "wind_cdir": "SW",
//             "rh": 83,
//             "pres": 1003.5,
//             "high_temp": 19.1,
//             "sunset_ts": 1664473406,
//             "ozone": 289.5,
//             "moon_phase": 0.261462,
//             "wind_gust_spd": 7.3,
//             "snow_depth": 0,
//             "clouds": 61,
//             "ts": 1664406060,
//             "sunrise_ts": 1664431302,
//             "app_min_temp": 11,
//             "wind_spd": 3.3,
//             "pop": 15,
//             "wind_cdir_full": "southwest",
//             "moon_phase_lunation": 0.14,
//             "slp": 1007.3,
//             "app_max_temp": 15.6,
//             "valid_date": "2022-09-29",
//             "vis": 24.128,
//             "snow": 0,
//             "dewpt": 10.2,
//             "uv": 3.7,
//             "weather": {
//                 "icon": "c03d",
//                 "code": 803,
//                 "description": "Broken clouds"
//             },
//             "wind_dir": 217,
//             "max_dhi": null,
//             "clouds_hi": 83,
//             "precip": 0.375,
//             "low_temp": 15.6,
//             "max_temp": 19.1,
//             "moonset_ts": 1664479281,
//             "datetime": "2022-09-29",
//             "temp": 13.3,
//             "min_temp": 11,
//             "clouds_mid": 49,
//             "clouds_low": 42
//         }
//     ],
//     "city_name": "York",
//     "lon": -1.0739,
//     "timezone": "Europe/London",
//     "lat": 53.9614,
//     "country_code": "GB",
//     "state_code": "ENG"
// }

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
    // <>{console.log(day)}</>
   <li    className={`day `} key={day.moonrise_ts.toString()} onClick={()=>{
    setPopup(day)
   }}>
      {/* <p>{key+1}</p> */}
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
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=53.9614&lon=-1.0739&key=7a685e76518a44b2a2e65b1a12bf0aa2`)
   .then((response) => response.json())
   .then((actualData) => {
    console.log(actualData)
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
  
   console.log(data)
 }, []);
 

 return (

  <>
  <div className="App">
    <div className='container'>
    <h1>Today`s Weather</h1>
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
        {console.log(popup)}
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
