import { Component } from 'react';

import { getImages } from './services/getFetch';
import { ColorRing } from 'react-loader-spinner';
import Button from './Button/Button';

import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  };
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { page } = this.state;
    console.log(page);
    try {
      this.setState({ isLoading: true });
      const { data } = await getImages(page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message || 'Oooopppsss! Try again' });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  loadMoreHandle = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    console.log(images);
    return (
      <>
        {error && <p>{error}</p>}
        {isLoading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button onBtnClick={this.loadMoreHandle}> Load more</Button>
          </>
        )}
      </>
    );
  }
}

