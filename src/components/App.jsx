
import { Component } from "react";

import { getImages } from "./services/getFetch";
import { Audio } from "react-loader-spinner";





import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page :1,
  }


  async fetchData() {
    try {
     this.setState({isLoading:true})
      const { data } = await getImages()
      this.setState(prevState=>({images:[...prevState.images,...data.hits],loading:false}))
    
  } catch (error) {
     this.setState({error:error.message || 'Oooopppsss! Try again'})
    }
    finally {
      this.setState({isLoading:false})
    }
}



 
  componentDidMount() {
   
 this.fetchData()
}


  render() {
    const { images,isLoading,error } = this.state
    console.log(images)
    return (
      <>
        {error && <p>{error}</p>}
        {isLoading &&<Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />}
        {images.length > 0 && <ImageGallery images={images} />}
        
      </>
    )
  }


}

  
  


 // getImages(q, page) {
    
  //   return axios.get('https://pixabay.com/api/', {
  //     params: {
  //       q,
  //       page,
  //       key: '33055694-6965e9dfecd686cd6e0cc5baf',
  //       image_type: 'photo',
  //       orientation: 'horizontal',
  //       per_page:12,

  //   }})
  //   .then(response=>this.setState(prevState=>({images:[...prevState.images,...response.data.hits],loading:false})))
  // }

