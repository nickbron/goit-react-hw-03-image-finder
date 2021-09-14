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
    //  data: [],
  };

  handleBarSubmit = pictureName => {
    this.setState({ pictureName });
  };

  showMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onClickLoadMoreBtn = () => {
    // pixabayApi.incrementPage();
    // const imageInfo =  this.searchPicture();
    // this.setState(prevState => ({
    //   imageGalleryItems: [...prevState.imageGalleryItems, ...imageInfo],
    // }));
    // return true;
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log('did', prevState.page);
    console.log('did', this.state.page);
    if (prevState.pictureName !== this.state.pictureName) {
      const data = await fetchPictures(this.state.pictureName, this.state.page);
      const imageInfo = data.map(({ id, largeImageURL, webformatURL }) => ({
        id,
        largeImageURL,
        webformatURL,
      }));
      this.setState({ pictures: imageInfo });
      console.log('gfgfgfgf', this.state.pictures);
    }
  }

  render() {
    const { pictures, page } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.handleBarSubmit} />
        {pictures.length > 0 && (
          <>
            <ImageGallery pic={pictures} />;
            <LoadMoreBtn onClick={this.showMore} />
          </>
        )}
      </div>
    );
  }
}
