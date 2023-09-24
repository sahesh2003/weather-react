import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autoFocus="on"
                  autoComplete="off"
                  id="city-input"
                  className="form-control shadow-sm input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm"
                />
              </div>
            </div>
          </form>
          <h1 id="city"></h1>
          <ul>
            <li id="date"></li>
            <li id="weatherName"></li>
          </ul>
          <div className="row">
            <div className="col-8">
              <div className="row mt-3">
                <div className="col-2 align-content-start" id="weather-img">
                  <img
                    src=""
                    alt=""
                    className="weather-icon float-left"
                    id="weather-icon"
                  />
                </div>
                <div className="col-3 float-left mr-0" id="weather-tempreture">
                  <span className="temperature" id="temperature"></span>
                </div>
                <div className="col-3 units">
                  <span> °C</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul>
                <li id="humidity"></li>
                <li id="wind"></li>
              </ul>
            </div>
          </div>
          <div className="row" id="forecast"></div>
        </div>
        <p className="weather-app link mt-0 pt-0" id="endNote">
          <a href="https://github.com/sahesh2003/SheCodesPlus-Github">
            Open-source code,
          </a>
          by Saideh Heshmati
        </p>
      </div>
    </div>
  );
}

export default App;
