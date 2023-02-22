import axios from "axios";
import { Component } from "react";





import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    images:[]
  }


  getImages(q,page) {
    return axios.get('https://pixabay.com/api/', {
      params: {
        q,
        page,
        key: '33055694-6965e9dfecd686cd6e0cc5baf',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page:12,

    }})
    .then(response=>this.setState(prevState=>({images:[...prevState.images,...response.data.hits]})))
  }

  componentDidMount() {
  this.getImages()
}


  render() {
    const { images } = this.state
    console.log(images)
    return (
      <>
        {/* images.length > 0 && */}
        { <ImageGallery images={ images} />}
      </>
    )
  }


}

  
  
