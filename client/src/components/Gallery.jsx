import React from 'react'
import ReactDOM from 'react-dom'
import styles from './css/apps.css'
import Lightbox from './Lightbox.jsx';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        };
        this.changeSlide = this.changeSlide.bind(this);
        this.toSlide = this.toSlide.bind(this);
        this.showSlide = this.showSlide.bind(this);
    }

    darken () {
        $(".secondImage, .thirdImage, .fourthImage, .fifthImage").addClass(`${styles.darken}`);
    }
    brighten (){
        $(".secondImage, .thirdImage, .fourthImage, .fifthImage").removeClass(`${styles.darken}`);
    }

    darken1 () {
        $(".mainImage, .thirdImage, .fourthImage, .fifthImage").addClass(`${styles.darken}`);
    }
    brighten1 (){
        $(".mainImage, .thirdImage, .fourthImage, .fifthImage").removeClass(`${styles.darken}`);
    }

    darken2 () {
        $(".secondImage, .mainImage, .fourthImage, .fifthImage").addClass(`${styles.darken}`);
    }
    brighten2 (){
        $(".secondImage, .mainImage, .fourthImage, .fifthImage").removeClass(`${styles.darken}`);
    }

    darken3 () {
        $(".secondImage, .thirdImage, .mainImage, .fifthImage").addClass(`${styles.darken}`);
    }
    brighten3 (){
        $(".secondImage, .thirdImage, .mainImage, .fifthImage").removeClass(`${styles.darken}`);
    }

    darken4 () {
        $(".secondImage, .thirdImage, .fourthImage, .mainImage").addClass(`${styles.darken}`);
    }
    brighten4 (){
        $(".secondImage, .thirdImage, .fourthImage, .mainImage").removeClass(`${styles.darken}`);
    }
    // Lightbox Function
    openLightBox() {
        $("#LightBox").css("display", "block");
    }

    closeLightBox() {
        $("#LightBox").css("display", "none");
    }

    changeSlide(n){
        console.log(n)
        this.setState(prevState => {
            return {slideIndex: prevState.slideIndex + n}
         })
        this.showSlide(this.state.slideIndex + n)
    }

    toSlide (n) {
        console.log(n)
        this.setState({
            slideIndex: n
        })
        this.showSlide(n)
    }

    onClickHandle(n) {
        //console.log(n)
        this.openLightBox();
        this.toSlide(n);
    }

    display1 () {
        console.log("hello")
        $(".slide1").removeClass(`${styles.none}`)
        $(".slide2, .slide3").removeClass(`${styles.slide}`);
    }
    



    showSlide(n) {
        // grabs all the elements which has this class name
        const slides = document.getElementsByClassName('slide');

        let modalPreviews = document.getElementsByClassName('modalPreview');
    

        if ( n > slides.length) {
            this.setState({
                slideIndex: 1
            })
        }

        if ( n < 1 ) {
            this.setState({
                slideIndex: slides.length
            })
        }

        //set all the slides display to none
        for ( let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }

        // set the correct slide's style to block
        slides[this.state.slideIndex-1].style.display = "block";


        //set all the modalPreview display to non active
        for ( let i = 0; i < modalPreviews.length; i++) {
            modalPreviews[i].style.opacity = 0.6;
        }

        //set the modal to active on click
        modalPreviews[this.state.slideIndex - 1].style.opacity = 1;

    }

    render() {

        if (this.props.pictures.length > 0) {
            return (

                <div className={styles.gallery}>
                    <div onClick={()=>{this.onClickHandle(1)}} onMouseOver={this.darken} onMouseLeave={this.brighten} className={`${styles.item} ${styles.mainImage} mainImage`}>
                
                            <img src={this.props.pictures[0].image_url} alt={this.props.pictures[0].image_info} />
                        
                    </div>
                    <div onClick={()=>{this.onClickHandle(2)}} onMouseEnter={this.darken1} onMouseLeave={this.brighten1} className={`${styles.colSec} ${styles.item} ${styles.secondImage} secondImage`}>
                  
                            <img src={this.props.pictures[1].image_url} alt={this.props.pictures[1].image_info} />
                    
                    </div>
                    <div onClick={()=>{this.onClickHandle(3)}} onMouseEnter={this.darken2} onMouseLeave={this.brighten2} className={`${styles.colLast} ${styles.item} ${styles.thirdImage} thirdImage`}>
                     
                            <img src={this.props.pictures[2].image_url} alt={this.props.pictures[2].image_info} />
                     
                    </div>
                    <div onClick={()=>{this.onClickHandle(4)}} onMouseEnter={this.darken3} onMouseLeave={this.brighten3} className={`${styles.colSec} ${styles.item} ${styles.fourthImage} fourthImage`}>
                    
                            <img src={this.props.pictures[3].image_url} alt={this.props.pictures[3].image_info} />
                    
                    </div>
                    <div onClick={()=>{this.onClickHandle(5)}} onMouseEnter={this.darken4} onMouseLeave={this.brighten4} className={`${styles.colLast} ${styles.item} ${styles.fifthImage} fifthImage`}>
                      
                            <img src={this.props.pictures[4].image_url} alt={this.props.pictures[4].image_info} />
                      
                    </div>
                    <Lightbox
                    pictures={this.props.pictures}
                    closeLightBox={this.closeLightBox}
                    changeSlide={this.changeSlide}
                    toSlide={this.toSlide}
                    display1={this.display1}
                    />
                </div>

            )
        }
        else {
            return null;
        }
    }
}

export default Gallery;