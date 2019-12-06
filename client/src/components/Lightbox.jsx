import React from 'react'
import styles from './css/apps.css'

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div id="LightBox" className={`${styles.modal} modal`} >

                <span className={`${styles.close} close pointer`} onClick={this.props.closeLightBox}>&times;</span>
            
            <div className={`${styles.modalContent} modalContent`}>

                <div className={`${styles.slide} slide`}>

                <img className={`${styles.imageSlide}`} src={this.props.pictures[0].image_url} alt={this.props.pictures[0].image_info} />
                </div>

                <div className={`${styles.slide} slide`}>

                <img className={`${styles.imageSlide}`} src={this.props.pictures[1].image_url} alt={this.props.pictures[1].image_info} />
                </div>

                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[2].image_url} alt={this.props.pictures[2].image_info} />
                </div>

                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[3].image_url} alt={this.props.pictures[3].image_info} />
                </div>
                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[4].image_url} alt={this.props.pictures[4].image_info} />
                </div>
                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[5].image_url} alt={this.props.pictures[5].image_info} />
                </div>
                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[6].image_url} alt={this.props.pictures[6].image_info} />
                </div>
                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[7].image_url} alt={this.props.pictures[7].image_info} />
                </div>
                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[8].image_url} alt={this.props.pictures[8].image_info} />
                </div>
                <div className={`${styles.slide} slide`}>
                <img className={`${styles.imageSlide}`} src={this.props.pictures[9].image_url} alt={this.props.pictures[9].image_info} />
                </div>


                <a className={`${styles.previous} previous`} onClick={()=>{this.props.changeSlide(-1)}}>&#10094;</a>

                <a className={`${styles.next} next`} onClick={()=>{this.props.changeSlide(1)}}>&#10095;</a>

                <div className={`${styles.dots} dots`}>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[0].image_url} className={`${styles.modalPreview} ${styles.hoverShadow} modalPreview hoverShadow`} onClick={()=>{this.props.toSlide(1)}} alt={this.props.pictures[0].image_info} />

                    </div>

                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[1].image_url} className={`${styles.modalPreview} ${styles.hoverShadow} modalPreview hoverShadow`} onClick={()=>{this.props.toSlide(2)}} alt={this.props.pictures[1].image_info} />

                    </div>

                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[2].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(3)}} alt={this.props.pictures[2].image_info} />

                    </div>

                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[3].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(4)}} alt={this.props.pictures[3].image_info} />

                    </div>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[4].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(5)}} alt={this.props.pictures[4].image_info} />

                    </div>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[5].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(6)}} alt={this.props.pictures[5].image_info} />

                    </div>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[6].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(7)}} alt={this.props.pictures[6].image_info} />

                    </div>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[7].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(8)}} alt={this.props.pictures[7].image_info} />

                    </div>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[8].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(9)}} alt={this.props.pictures[8].image_info} />

                    </div>
                    <div className={`${styles.col} col`}>

                    <img src={this.props.pictures[9].image_url} className={`${styles.modalPreview} ${styles.hoverShadow}modalPreview hoverShadow`}onClick={()=>{this.props.toSlide(10)}} alt={this.props.pictures[9].image_info} />

                    </div>

                </div>
            </div>
        </div>


        )
    }
}

export default Lightbox