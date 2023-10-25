export default function Forecast_Panel({forecast_info} : {
  forecast_info : {[key: string] : string | number | Array<object>}
}) {
  const weekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

  const forecast_days : React.ReactNode[] = []
  for (let i = 0; i < (forecast_info.list.length as number); i += 8) {
    const date = new Date((forecast_info.list as object[])[i].dt as number * 1000);
    forecast_days.push(
      <div className="flex flex-col flex-wrap h-fit grow items-center justify-items-center place-items-center">
        <span>
          <img src={`http://openweathermap.org/img/wn/${(((forecast_info.list as object[])[i].weather as object[])[0].icon as string)}@2x.png`} className="justify-self-center" alt="Ikona obrazująca przewidywaną pogodę"/>
        </span>
        <span className="text-2xl font-bold">{(forecast_info.list as object[])[i].main.temp}&#8451;</span>
        <span>{weekdays[date.getDay()]}</span>
      </div>
    )
  }

  return (
    <div className="p-5 bg-gray-300">
      <div className="flex flex-row flex-nowrap w-full gap-2 p-3 items-end">
        {forecast_days}
      </div>
    </div>
  )
}