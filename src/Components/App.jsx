import Loader from 'react-loader-spinner';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPictures } from 'Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';

export default class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    page: 1,
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleBarSubmit = pictureName => {
    this.setState({ pictureName });
  };

  showMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  fetchData = async () => {
    const data = await fetchPictures(this.state.pictureName, this.state.page);
    const imageInfo = data.map(({ id, largeImageURL, webformatURL }) => ({
      id,
      largeImageURL,
      webformatURL,
    }));
    return imageInfo;
  };

  componentDidUpdate(prevProps, prevState) {
    const imageInfo = this.fetchData();
    this.scroll();
    if (prevState.pictureName !== this.state.pictureName) {
      imageInfo.then(res => {
        this.setState({ pictures: res });
      });
    }

    if (prevState.page !== this.state.page) {
      imageInfo.then(res => {
        this.setState({ pictures: [...prevState.pictures, ...res] });
      });
    }
  }

  render() {
    const { pictures } = this.state;

    return (
      <div className="App">
        <Searchbar onSearch={this.handleBarSubmit} />
        {pictures.length > 0 && (
          <>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
            <ImageGallery pic={pictures} toggleModal={this.toggleModal} />;
            <LoadMoreBtn onClick={this.showMore} />
          </>
        )}
      </div>
    );
  }
}
