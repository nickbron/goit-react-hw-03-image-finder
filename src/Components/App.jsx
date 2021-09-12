import axios from 'axios';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPictures } from 'Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    data: [],
  };

  handleBarSubmit = pictureName => {
    this.setState({ pictureName });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.pictureName !== this.state.pictureName) {
      const data = await fetchPictures(this.state.pictureName, 3);

      this.setState({ pictures: data });
    }
  }
  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleBarSubmit} />;
        <ImageGallery pic={this.state.pictures} />;
      </div>
    );
  }
}
