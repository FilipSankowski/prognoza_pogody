export default function Weather_Panel({weather_info} : {
  weather_info : {[key: string] : string | number | Array<object> | object},
}) {
  const date = new Date(weather_info.dt as number * 1000);
  const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
  const weekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  const sunrise = new Date(weather_info.sys.sunrise as number * 1000)
  const sunset = new Date(weather_info.sys.sunset as number * 1000)

  return (
    <div className="flex grow p-2 gap-2">

      <div className="flex flex-col justify-center gap-3 w-2/5">
        <span className="flex self-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span>{weather_info.name as string}</span>
        </span>
        <span className="ml-5 self-end">
          {months[date.getMonth()]} {date.getDate()} <br/>
          {weekdays[date.getDay()]}
        </span>
        <span className="ml-5 self-end">
          <span className="text-3xl font-bold">
            {weather_info.main.temp as string}&#8451;
          </span> <br/>
          Feels like {weather_info.main.feels_like as string}&#8451;
        </span>
      </div>

      <div className="flex flex-col flex-wrap justify-center w-1/5">
        <div className="w-full flex justify-center">
          <img src={`http://openweathermap.org/img/wn/${(weather_info.weather as Array<object>)[0].icon as string}@2x.png`} className="justify-self-center" alt="Ikona obrazująca aktualną pogodę"/>
        </div>
        <span className="text-gray-600 text-center w-full">{(weather_info.weather as Array<object>)[0].description as string}</span>
      </div> 

      <div className="flex flex-col flex-wrap justify-center items-end w-2/5">
        <span className="w-full">Sunrise: {sunrise.getHours() > 9 ? sunrise.getHours() : '0' + sunrise.getHours()}:{sunrise.getMinutes() > 9 ? sunrise.getMinutes() : '0' + sunrise.getMinutes()}</span>
        <span className="w-full">Sunset: {sunset.getHours() > 9 ? sunset.getHours() : '0' + sunset.getHours()}:{sunset.getMinutes() > 9 ? sunset.getMinutes() : '0' + sunset.getMinutes()}</span>
        <span className="w-full">Wilgotność powietrza: {weather_info.main.humidity as number}%</span>
        <span className="w-full">Ciśnienie: {weather_info.main.pressure as number} hPa</span>
        <span className="w-full">Prędkość wiatru: {weather_info.wind.speed as number} m/s</span>
      </div>
    </div>
  )
}