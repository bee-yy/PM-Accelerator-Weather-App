import './WeatherStatsCard.css';

function WeatherStatsCard(props){

    return(
        <div className="forecast-stats-card">
      <p className='stats-name body-sm'> {props.statName}</p>
      <p className='stats-value body-lg'> <span>{props.statValue} {props.unit} </span></p>
    </div>
    )
}

export default WeatherStatsCard;