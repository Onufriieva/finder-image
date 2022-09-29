import PropTypes from 'prop-types';
import { Component } from 'react';
import {SearchbarHeader, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput} from './SearchbarStyled'

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState(
      {inputValue: e.currentTarget.value.toLowerCase()}
    );
    console.log(this.state.inputValue)
  };

  handleSumbit = e => {
    e.preventDefault();
    if(this.state.inputValue.trim() === ''){
      alert('Введите запрос')
      return
    };

    this.props.onSubmit(this.state.inputValue);

    this.setState({inputValue: ''})
    console.log(this.state.inputValue)
  }
    
render() {


  return (
    <SearchbarHeader>
      <SearchForm  onSubmit={this.handleSumbit}>
        <SearchFormBtn type="submit" >
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
      <SearchFormInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
      />
      </SearchForm>
    </SearchbarHeader>
  )
}
  }


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

