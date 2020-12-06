import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      isLoaded: false,
      weatherData: null
    }
  }

  abortController = new AbortController();
  controllerSignal = this.abortController.signal;

  

  getWeatherData = () => {
    const weatherApi = `api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${process.env.REACT_APP_WEATHER_KEY}`;

    fetch(weatherApi, { signal: this.controllerSignal })
    .then(response => response.json())
    .then(
      (result) => {
        console.log(result);
        const { name } = result;
        const { country } = result.sys;
        const { temp, temp_min, temp_max, feels_like, humidity } = result.main;
        const { description, icon } = result.weather[0];
        const { speed, deg } = result.wind;

        this.setState({
          isLoaded: true,
          weatherData: {
            name,
            country,
            description,
            icon,
            temp: temp.toFixed(1),
            feels_like: feels_like.toFixed(1),
            temp_min: temp_min.toFixed(1),
            temp_max: temp_max.toFixed(1),
            speed,
            deg,
            humidity
          }
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  componentDidMount() {
    this.getWeatherData();
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>

        </div>
      </div>
    );
  }
}

export default App;
