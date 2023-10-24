'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import Weather_Panel from "@/components/Weather_Panel";
import { Dispatch, SetStateAction, useState } from "react"

type weather_info_type = [
  weather_info : {[key: string] : string | number | Array<object> | object},
  setWeather_info : Dispatch<SetStateAction<{[key: string] : string | number | Array<object> | object}>>
]
type forecast_info_type = [
  forecast_info : {[key: string] : string | number | Array<object> | object},
  setForecast_info : Dispatch<SetStateAction<{[key: string] : string | number | Array<object> | object}>>
]

export default function Home() {
  const [city, setCity] = useState('');
  const [weather_info, setWeather_info] : weather_info_type = useState({});
  const [forecast_info, setForecast_info] : forecast_info_type = useState({});

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(res => setWeather_info(res))
      .catch(res => console.warn('Zapytanie zawiodło'));
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(res => setForecast_info(res))
      .catch(res => console.warn('Zapytanie zawiodło'));
  }

  return (
    <div className="grid grid-cols-4 grow gap-0">
      <div className="flex flex-col flex-wrap col-span-1 p-3 bg-gray-300 gap-2">
        <Input
        id="city_input"
        type="text"
        className="w-5/6"
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {if (e.key === 'Enter') getWeather()}}
        >
          <span className="font-bold">Sprawdź pogodę dla miasta:</span>
        </Input>
        <Button 
        className="w-1/2 place-self-end"
        onClick={getWeather}
        >
          Wyszukaj
        </Button>
      </div>
      <div className="flex col-span-3 bg-gray-200">
        {
          Object.keys(weather_info).length !== 0 && Object.keys(forecast_info).length !== 0
          ?
          <Weather_Panel weather_info={weather_info} forecast_info={forecast_info}/>
          :
          <></>
        }
      </div>
    </div>
    
  )
}
