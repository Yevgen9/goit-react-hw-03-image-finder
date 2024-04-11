import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import { ToastContainer, toast } from 'react-toastify';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    query: '',
    arrayOfImages: [],
    page: 1,
    showButton: false,
    showLoader: true,
  };

  onSubmitForm = query => {
    this.setState({ arrayOfImages: [] });
    this.setState({ query: query });
    this.fetchAPI(query, 1);
  };

  fetchAPI(query, page) {
    let BASE_URL = 'https://pixabay.com/api/?';
    let KEY = '43336458-76637faf1bf6ab87a136a6b9c';
    let PER_PAGE = '12';

    let URL = `${BASE_URL}q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

    fetch(URL)
      .then(response => response.json())

      .then(data => {
        // console.log(data);

        // toast.success(`Found ${data.totalHits} images, Bro!`, {
        //   position: 'top-center',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'dark',
        // });

        this.setState(prevState => ({
          arrayOfImages: [...prevState.arrayOfImages, ...data.hits],
        }));

        let totalNumberOfImages = data.totalHits;
        let alreadyDownLoaded = PER_PAGE * this.state.page;
        if (totalNumberOfImages > alreadyDownLoaded) {
          this.setState({ showButton: true });
        } else {
          this.setState({ showButton: true });
        }
      })

      .catch(error => {
        // Error handling
        this.setState({ error });
      });
  }

  render() {
    return (
      <>
        {/* <ToastContainer /> */}
        <Searchbar onSubmit={this.onSubmitForm} />
        {this.state.arrayOfImages.length > 0 && (
          <ImageGallery images={this.state.arrayOfImages} />
        )}
        {this.state.showButton && <Button />}
        {this.state.showLoader && <Loader />}
      </>
    );
  }
}
