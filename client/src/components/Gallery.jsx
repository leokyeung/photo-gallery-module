import React from 'react'
import { findDOMNode} from 'react-dom'
import './css/apps.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    darken () {
        $(".secondImage, .thirdImage, .fourthImage, .fifthImage").addClass("darken");
    }
    brighten (){
        $(".secondImage, .thirdImage, .fourthImage, .fifthImage").removeClass("darken");
    }

    darken1 () {
        $(".mainImage, .thirdImage, .fourthImage, .fifthImage").addClass("darken");
    }
    brighten1 (){
        $(".mainImage, .thirdImage, .fourthImage, .fifthImage").removeClass("darken");
    }

    darken2 () {
        $(".secondImage, .mainImage, .fourthImage, .fifthImage").addClass("darken");
    }
    brighten2 (){
        $(".secondImage, .mainImage, .fourthImage, .fifthImage").removeClass("darken");
    }

    darken3 () {
        $(".secondImage, .thirdImage, .mainImage, .fifthImage").addClass("darken");
    }
    brighten3 (){
        $(".secondImage, .thirdImage, .mainImage, .fifthImage").removeClass("darken");
    }

    darken4 () {
        $(".secondImage, .thirdImage, .fourthImage, .mainImage").addClass("darken");
    }
    brighten4 (){
        $(".secondImage, .thirdImage, .fourthImage, .mainImage").removeClass("darken");
    }

    render() {

        if (this.props.pictures.length > 0) {
            return (

                <div className='gallery'>
                    <div onMouseEnter={this.darken} onMouseLeave={this.brighten} className="item mainImage">
                        <a href={this.props.pictures[0].image_url} title={this.props.pictures[0].image_info}>
                            <img src={this.props.pictures[0].image_url} alt={this.props.pictures[0].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken1} onMouseLeave={this.brighten1} className="item secondImage">
                        <a href={this.props.pictures[1].image_url} title={this.props.pictures[1].image_info}>
                            <img src={this.props.pictures[1].image_url} alt={this.props.pictures[1].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken2} onMouseLeave={this.brighten2} className="item thirdImage">
                        <a href={this.props.pictures[2].image_url} title={this.props.pictures[2].image_info}>
                            <img src={this.props.pictures[2].image_url} alt={this.props.pictures[2].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken3} onMouseLeave={this.brighten3} className="item fourthImage">
                        <a href={this.props.pictures[3].image_url} title={this.props.pictures[3].image_info}>
                            <img src={this.props.pictures[3].image_url} alt={this.props.pictures[3].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken4} onMouseLeave={this.brighten4} className="item fifthImage">
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