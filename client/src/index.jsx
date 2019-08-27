import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ImageItem from './Components/ImageItem.jsx';
import ThumbnailGallery from './Components/ThumbnailGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentImage: null
    };

    this.handleImageListClick = this.handleImageListClick.bind(this);
  }

  //componentDidMount
  componentDidMount() {
    $.get('/api/image/:gameId/:game_name', (data) => {
      console.log('DATA ---> ', data);
      this.setState({
        images: data,
        currentImages: data[0]
      });
    });
  }

  handleImageListClick(thumbnail) {
    this.setState({
      currentImage: thumbnail
    });
  }

  // nextSlide(direction) {
  //   let index = 0;
  //   switch (direction) {
  //     case 'auto':
  //       index = this.currentIndex + 1;
  //       this.currentIndex = index >= this.state.slideShow.length ? 0 : index;
  //       break;
  //     case 'prev':
  //       index = this.currentIndex - 1;
  //       this.currentIndex = index < 0 ? this.state.slideShow.length - 1 : index;
  //       break;
  //     case 'next':
  //       index = this.currentIndex + 1;
  //       this.currentIndex = index >= this.state.slideShow.length ? 0 : index;
  //       this.pause = true;
  //       break;
  //     default:
  //       this.currentIndex = direction;
  //       this.pause = true;
  //       break;
  //   }
  //   this.setState({
  //     slideShow: this.slideShow[this.currentIndex],
  //     slideIndex: this.currentIndex
  //   });
  // }

  render() {
    return (
      <div className="photocarousel">
        <ImageItem image={this.state.currentImage} />
        <ThumbnailGallery  handleImageListClick={this.handleImageListClick} images={this.state.images}/>
        {/* <div className="wrap">
          <button className="btn-prev" value="Prev" onClick={() => this.nextSlide('prev')}>Previous</button>
          <button className="btn-next" value="Next" onClick={() => this.nextSlide('next')}>Next</button>
        </div> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('photogallery'));


// componentDidUpdate() {
//   var that = this;
//   if (this.pause === true) {
//     clearInterval(this.timeout);
//     this.timePause = setTimeout(() => {
//       clearInterval(this.timePause);
//     }, 8000);
//     this.pause = false;
//   }
//   this.timeout = setTimeout(() => { 
//     that.nextSlide('auto')
//   }, 3000);
// }

// --------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';

// import ImageSlide from './components/ImageSlide.jsx';
// import Arrows from './components/Arrows.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [],
//       currentImage: ''
//     };
//   }

//   // componentDidMount
//   componentDidMount() {
//     $.get('/api/image', (data) => {
//       this.setState({
//         images: data,
//         currentImage: data[0]
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="photocarousel">
//         {/* <Arrows direction="left" clickFunc={ this.previousSlide }/> */}

//         <ImageSlide images={ this.state.images }/>

//         {/* <Arrows direction="right" clickFunc={ this.nextSlide }/> */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('photogallery'));







  // previousSlide() {
  //   const last = this.state.images.length - 1;
  //   const { currentImage } = this.state;
  //   const index = 0;
  //   // const reset = currentImage === 0;
  //   if(currentImage === 0) {
  //     index = last;
  //   } else {
  //     index = currentImage - 1;
  //   }

  //   this.setState({
  //     currentImage: index
  //   });
  // }

  // nextSlide() {
  //   const last = this.state.images.length - 1;
  //   const { currentImage } = this.state;
  //   const index = 0;

  //   if(currentImage === last) {
  //     index = 0;
  //   } else {
  //     index = currentImage + 1;
  //   }

  //   this.setState({
  //     currentImage: index
  //   });
  // }