import React, {Component} from "react";
// import {ReactComponent as Loop} from '../../svg/loop.svg'
import Modal from "components/modal/Modal";
import ImageGallery from "components/imageGallery/ImageGallery";
import Searchbar from "components/searchbar/Searchbar";
import Loader from "components/loader/Loader";
import axios from 'axios';
import { StyledApp } from "./AppStyled";
import Button from "components/button/Button";



export class App extends Component {
state = {
  inputValue: '',
  loading: false,
  error: null,
  images: [],
  currentPage: 1,
  showModal: false,
  modalContent: '',
};

  componentDidUpdate(__, prevState) {
    const { inputValue, currentPage } = this.state;
    if (prevState.inputValue !== inputValue || prevState.currentPage !== currentPage) {
      this.setState({loading: true})

      this.fetchImages()
    };  
  };


  fetchImages = () => {
    const { inputValue, currentPage } = this.state;
      axios.get(
        `https://pixabay.com/api/?q=${inputValue}&page=${currentPage}
        &key=29221253-dd17a46566e1be23f7ca8ff9b&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => { 
        this.setState(({ images }) => {
          return {images: [...images, ...response.data.hits]}
        }
      ) })
     .catch(error => this.setState({ error: error }))
     .finally(() => this.setState({ loading: false })) 
  };
   
 
  formSubmit = inputValue => {
    this.setState({inputValue: inputValue})
  };


  toggleModal = (largeImageURL) => {
    this.setState(state => ({
      showModal: !state.showModal,
      modalContent: largeImageURL
    })
    )
  }

  loadMore = () => {
    this.setState(({currentPage}) => {
        return {
          currentPage: currentPage + 1
        }
    })
  }

  

  render() {

    const { showModal, loading, error, images, modalContent } = this.state;
    const isImages = Boolean(images.length);
    return (

         <StyledApp>
          <p>{}</p>
       
        <Searchbar onSubmit={this.formSubmit}/>

        {loading && <Loader/>}   
        {error && <p>Error, try again</p>}
       
        <ImageGallery images={images} onClick={this.toggleModal}/>

        {showModal && <Modal onClose={this.toggleModal}>
         <img src={modalContent} alt="" /> </Modal>}

        {isImages && <Button onClick={this.loadMore}/>}        
   
        </StyledApp>
    );
  }
}