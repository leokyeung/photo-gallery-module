import React from 'react'
import './css/apps.css'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galleries: []
      };
    }

    componentDidMount(){
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
        <div class='title1'>
          <h1>Hello, world!</h1>
    
        </div>
      );
    }
}

export default App