import SunnyIcon from '../../assets/Sunny.svg';
import PartlyCloudyIcon from '../../assets/Partly Cloudy.svg';
import OvercastIcon from '../../assets/Overcast.svg';
import FogIcon from '../../assets/Fog.svg';
import DrizzleIcon from '../../assets/Drizzle.svg';
import RainIcon from '../../assets/Rain.svg';
import SnowIcon from '../../assets/Snow.svg';
import ThunderStormsIcon from '../../assets/Thunderstorms.svg';

const weatherCodeMap = {
  0: SunnyIcon,              // Clear sky
  1: SunnyIcon,              // Mainly clear
  2: PartlyCloudyIcon,       // Partly cloudy
  3: OvercastIcon,           // Overcast
  45: FogIcon,               // Fog
  48: FogIcon,               // Depositing rime fog
  51: DrizzleIcon,           // Drizzle: Light
  53: DrizzleIcon,           // Drizzle: Moderate
  55: DrizzleIcon,           // Drizzle: Dense intensity
  56: DrizzleIcon,           // Freezing Drizzle: Light
  57: DrizzleIcon,           // Freezing Drizzle: Dense
  61: RainIcon,              // Rain: Slight
  63: RainIcon,              // Rain: Moderate
  65: RainIcon,              // Rain: Heavy
  66: RainIcon,              // Freezing Rain: Light
  67: RainIcon,              // Freezing Rain: Heavy
  71: SnowIcon,              // Snow fall: Slight
  73: SnowIcon,              // Snow fall: Moderate
  75: SnowIcon,              // Snow fall: Heavy
  77: SnowIcon,              // Snow grains
  80: RainIcon,              // Rain showers: Slight
  81: RainIcon,              // Rain showers: Moderate
  82: RainIcon,              // Rain showers: Violent
  85: SnowIcon,              // Snow showers: Slight
  86: SnowIcon,              // Snow showers: Heavy
  95: ThunderStormsIcon,     // Thunderstorm: Slight or moderate
  96: ThunderStormsIcon,     // Thunderstorm with slight hail
  99: ThunderStormsIcon,     // Thunderstorm with heavy hail
};

export default weatherCodeMap;