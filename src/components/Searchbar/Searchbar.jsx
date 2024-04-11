import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.scss';

import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeInput = e => {
    this.setState({ query: e.target.value });
  };

  handlSubmitForm = e => {
    e.preventDefault();

    if (this.state.query === '') {
      toast.error('Please enter text, Bro!', {
        autoClose: 1000,
        closeOnClick: true,
        position: 'top-center',
        theme: 'dark',
      });
      this.handleClearInput();
      return;
    }
    this.props.onSubmit(this.state.query);
    this.handleClearInput();
  };

  handleClearInput = () => {
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <ToastContainer />
        <form className="form" onSubmit={this.handlSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            onChange={this.handleChangeInput}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
