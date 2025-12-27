import './DailyForecastCard.css'

function DailyForecastCard(props){
return (  
 <div className="daily-forecast-card">
    <p className='day'>{props.day}</p>
    <div className="icon-container">
      <img src={props.iconName} alt={props.iconName} />
    </div>
    <div className='temperature-range'>
      <p> <span>{props.lowTemp} </span> <sup>°</sup> </p>
      <p> <span> {props.highTemp} </span> <sup>°</sup></p>
    </div>
    </div>
)

}

export default DailyForecastCard;