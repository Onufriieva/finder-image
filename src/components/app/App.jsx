import React, {Component} from "react";
import Modal from "components/modal/Modal";
import ImageGallery from "components/imageGallery/ImageGallery";
import Searchbar from "components/searchbar/Searchbar";
import Loader from "components/loader/Loader";
import { StyledApp } from "./AppStyled";
import Button from "components/button/Button";
import { fetchImages } from "components/api/fetch";


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
    if (prevState.inputValue !== inputValue ) {
      this.setState({loading: true})

      fetchImages(inputValue, currentPage).then(images =>
        this.setState({ images, 
          currentPage: currentPage + 1, 
          loading: false })
      );

    };  
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
    const { inputValue, currentPage } = this.state;

    fetchImages(inputValue, currentPage).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,  
      }));
    });
  };

  

  render() {

    const { showModal, loading, error, images, modalContent } = this.state;
    const isImages = Boolean(images.length);
    return (

         <StyledApp>
          <p>{}</p>
       
        <Searchbar onSubmit={this.formSubmit}/>

        {loading && <Loader/>}   
        {error && <p>Error, try again</p>}

        {isImages && <ImageGallery images={images} onClick={this.toggleModal}/>}       
       

        {showModal && <Modal onClose={this.toggleModal}>
         <img src={modalContent} alt="" /> </Modal>}

        {isImages && <Button onClick={this.loadMore}/>}        
   
        </StyledApp>
    );
  }
}