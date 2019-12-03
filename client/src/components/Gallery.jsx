import React from 'react'
import styles from './css/apps.css'
console.log(styles);
class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    // darken (e) {

    //     console.log(e.target.className)


        // array = ['mainImage', 'secondImage', 'thirdImage', 'fourthImage', 'fifthImage']
        // for ( var i = 0; i < array.length;i++){
        //     if (e.target.value !== array[i]){
        //         $(`".${e.target.value}"`).addClass("darken")
        //     }
        // }
    // }

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

    render() {

        if (this.props.pictures.length > 0) {
            return (

                <div className={styles.gallery}>
                    <div onMouseOver={this.darken} onMouseLeave={this.brighten} className={`${styles.item} ${styles.mainImage} mainImage`}>
                        <a href={this.props.pictures[0].image_url} title={this.props.pictures[0].image_info}>
                            <img src={this.props.pictures[0].image_url} alt={this.props.pictures[0].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken1} onMouseLeave={this.brighten1} className={`${styles.item} ${styles.secondImage} secondImage`}>
                        <a href={this.props.pictures[1].image_url} title={this.props.pictures[1].image_info}>
                            <img src={this.props.pictures[1].image_url} alt={this.props.pictures[1].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken2} onMouseLeave={this.brighten2} className={`${styles.item} ${styles.thirdImage} thirdImage`}>
                        <a href={this.props.pictures[2].image_url} title={this.props.pictures[2].image_info}>
                            <img src={this.props.pictures[2].image_url} alt={this.props.pictures[2].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken3} onMouseLeave={this.brighten3} className={`${styles.item} ${styles.fourthImage} fourthImage`}>
                        <a href={this.props.pictures[3].image_url} title={this.props.pictures[3].image_info}>
                            <img src={this.props.pictures[3].image_url} alt={this.props.pictures[3].image_info} />
                        </a>
                    </div>
                    <div onMouseEnter={this.darken4} onMouseLeave={this.brighten4} className={`${styles.item} ${styles.fifthImage} fifthImage`}>
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

export default Gallery;