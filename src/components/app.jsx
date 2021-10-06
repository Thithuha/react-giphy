import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "l3vRaLSB7dP96NTWw" },
      { id: "5yLgoctdubLO8XGodOM" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="l3vRaLSB7dP96NTWw" />
          </div>
        </div>
        <div className="right-scene">
            <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
