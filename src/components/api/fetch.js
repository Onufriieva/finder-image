import axios from "axios";


export const fetchImages = async (inputValue, currentPage) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${inputValue}&page=${currentPage}&key=29221253-dd17a46566e1be23f7ca8ff9b&image_type=photo&orientation=horizontal&per_page=12`
      );
      
      return response.data.hits;
    } catch (error) {
      console.error(error);
    } 
  };