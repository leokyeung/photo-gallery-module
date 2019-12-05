import React from 'react'
import Gallery from './Gallery.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: []
    };
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: '/listings/pictures',
      dataType: 'json',
      success: (data) => {
        this.setState({
          galleries: data
        })
      }
    });
  }

  render() {


    return (

      <div>

      <Gallery pictures={this.state.galleries}/>

      </div>
    )
  }
}

export default App