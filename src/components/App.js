import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Images {this.state.images.length}
      </div>
    );
  }
}

export default App;



  //client_id: "b6a9cf9989a4f1c0d2cdbd05e8b845ec675dcd6c7d84acb52688c084d138168b"