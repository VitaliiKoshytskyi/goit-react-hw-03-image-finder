import { Component } from 'react';

import { getImages } from './services/getFetch';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    search: '',
    showModal:false,
  };
  

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state
    if (search !== prevState.search || page !==prevState.page )  {
      
      this.fetchData()
    }
   
  }

  showModal =()=> {
    this.setState({
     showModal:true
    })
  }

  closeModal = () => {
    this.setState({
      showModal:false
    })
  }

  updateSearch =(search) => {
  this.setState({search,images:[], page:1})
}


  async fetchData() {
    const { page ,search} = this.state;
    console.log(page);
    try {
      this.setState({ isLoading: true });
      const { data } = await getImages(page,search);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        
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
    const { images, isLoading, error,showModal } = this.state;
    
    return (
      <>
        {showModal && <Modal closeModal={this.closeModal}>
        <img src='#' alt="#" />
        </Modal>}
        <Searchbar onSubmit={ this.updateSearch} />
        {error && <p>{error}</p>}
        {isLoading && (<Loader />)}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} showModal={this.showModal} />
            <Button onBtnClick={this.loadMoreHandle}> Load more</Button>
          </>
        )}
      </>
    );
  }
}

