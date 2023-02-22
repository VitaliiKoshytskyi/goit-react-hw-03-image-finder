import axios from "axios";



export const getImages = ( page, searchQuery) => {
  console.log(searchQuery)
    
    return axios.get('https://pixabay.com/api/', {
      params: {
        q:searchQuery,
        page,
        key: '33055694-6965e9dfecd686cd6e0cc5baf',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page:12,

    }})
    
  }