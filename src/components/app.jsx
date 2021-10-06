import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "l3vRaLSB7dP96NTWw"
    }
  }

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
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
            <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
