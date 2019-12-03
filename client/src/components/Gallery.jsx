import React from 'react'
import './css/apps.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        if (this.props.pictures.length > 0) {
            return (

                <div className='gallery'>
                    <div className="item mainImage">
                        <a href={this.props.pictures[0].image_url} title={this.props.pictures[0].image_info}>
                            <img src={this.props.pictures[0].image_url} alt={this.props.pictures[0].image_info} />
                        </a>
                    </div>
                    <div className="item secondImage">
                        <a href={this.props.pictures[1].image_url} title={this.props.pictures[1].image_info}>
                            <img src={this.props.pictures[1].image_url} alt={this.props.pictures[1].image_info} />
                        </a>
                    </div>
                    <div className="item thirdImage">
                        <a href={this.props.pictures[2].image_url} title={this.props.pictures[2].image_info}>
                            <img src={this.props.pictures[2].image_url} alt={this.props.pictures[2].image_info} />
                        </a>
                    </div>
                    <div className="item fourthImage">
                        <a href={this.props.pictures[3].image_url} title={this.props.pictures[3].image_info}>
                            <img src={this.props.pictures[3].image_url} alt={this.props.pictures[3].image_info} />
                        </a>
                    </div>
                    <div className="item fifthImage">
                        <a href={this.props.pictures[4].image_url} title={this.props.pictures[4].image_info}>
                            <img src={this.props.pictures[4].image_url} alt={this.props.pictures[4].image_info} />
                        </a>
                    </div>
                </div>

            )
        }
        else {
            return null;
        }
    }
}
export default Gallery