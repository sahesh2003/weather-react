import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app">
          <form class="search-form" id="search-form">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  class="form-control shadow-sm input"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="form-control btn btn-primary shadow-sm"
                />
              </div>
            </div>
          </form>
          <h1 id="city"></h1>
          <ul>
            <li id="date"></li>
            <li id="weatherName"></li>
          </ul>
          <div class="row">
            <div class="col-8">
              <div class="row mt-3">
                <div class="col-2 align-content-start" id="weather-img">
                  <img
                    src=""
                    alt=""
                    class="weather-icon float-left"
                    id="weather-icon"
                  />
                </div>
                <div class="col-3 float-left mr-0" id="weather-tempreture">
                  <span class="temperature" id="temperature"></span>
                </div>
                <div class="col-3 units">
                  <span> °C</span>
                </div>
              </div>
            </div>
            <div class="col-4">
              <ul>
                <li id="humidity"></li>
                <li id="wind"></li>
              </ul>
            </div>
          </div>
          <div class="row" id="forecast"></div>
        </div>
        <p class="weather-app link mt-0 pt-0" id="endNote">
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
