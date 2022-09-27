// import PropTypes from 'prop-types';
// import { Component } from 'react';


// export default class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleInputChange = e => {
//     this.setState(
//       {inputValue: e.currentTarget.value.toLowerCase()}
//     );
//   };

//   handleSumbit = e => {
//     e.preventDefault();
//     if(this.state.inputValue.trim() === ''){
//       alert('Введите запрос')
//       return
//     };

//     this.props.onSubmit(this.state.inputValue);

//     this.setState({inputValue: ''})
//   }
    
// render() {


//   return (
//     <header >
//       <form  onSubmit={this.handleSumbit}>
//         <button type="submit" >
//           <span>Search</span>
//         </button>
//       <input
//         type="text"
//         // autocomplete="off"
//         // autofocus
//         placeholder="Search images and photos"
//         value={this.state.inputValue}
//         onChange={this.handleInputChange}
//       />
//       </form>
//     </header>
//   )
// }
//   }


// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchbarStyled';

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            onChange={this.handleChange}
            name="name"
            type="text"
            value={this.state.name}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};