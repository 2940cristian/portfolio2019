/* eslint-disable */
import React from "react";
import * as SVG from "../Assets/Images/svg_main";
import mentrship from "../Assets/Images/mentrship.png";
import picme from "../Assets/Images/picme.png";
import phone from "../Assets/Images/phone.png"
import email from "../Assets/Images/email.png";
import location from "../Assets/Images/location.png";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class Landing extends React.Component{
    state = {
        anchorEl: null,
        windowSize: "",
      };
    
    componentDidMount() {
        window.addEventListener("resize", this.onResize)
    }

    onResize = () => {
        const windowSize = window.innerWidth;
        this.setState({
            windowSize
        })
    }
    render() {
        return(
        <body>
            <section className="Navbar__home">
                <nav className="Navbar__wrapper">
                    <div className="Navbar__section-left">
                        <a>Cristian Garcia</a>
                    </div>

                    <div className="Navbar__section-right">
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#" id="Navbar__contact">Contact</a>
                    </div>
                </nav>

                <section className="Home__content">
                    <p className="Home__content-text">Developer with a knack for design.</p>
                    <p className="Home__content-text Home__content-textBottom">Creating elegant solutions, one line at a time</p>

                    <div className="svg__contact">
                        <SVG.ContactBlob/>
                    </div>

                    <div className="svg__bottomLeft">
                        <SVG.HomeBottomLeftBlob/>
                    </div>

                    <div className="svg__bottomTop">
                        <SVG.HomeBottomTopBlob/>
                    </div>

                    <div className="svg__bottomRight">
                        <SVG.HomeBottomRightBlob/>
                    </div>

                    <div className="svg__bottomRightTop">
                        <SVG.HomeBottomTopRightBlob/>
                    </div>
                </section>
            </section>



            <section id="About">
                <div className="About__text">
                    <p className="About__text-inner">California based factory worker turned Full Stack Developer</p>
                    <p className="About__text-inner">I enjoy designing, building, and deploying meaninful web applications</p>
                    <p className="About__text-inner">Developer, designer, project lead. What's not to love?</p>
                </div>

                <div className="svg__triangleAbout">
                    <SVG.TriangleAbout/>
                </div>
            </section>

            <section id="Projects">
                <div className="Projects__images">
                    <div className="image_overlay">
                    <img src={mentrship}/>
                    <p className="centered">A platform where users can seek free mentorship through text based communcations</p>
                    </div>

                    <div className="image_overlay">
                    <img src={picme}/>
                    <p className="centered">An image sharing application where you can save other users photos to your account</p>
                    </div>
                </div>

                <p className="Projects__text">Each project I attempt to learn something new, whether it be: Typescript, React Context API, Djangorestframework, etc. If there is nothing to be learned it is not worth doing</p>
            </section>







            <section id="contact">
            <form id="form">
                <p>Let's get in touch. Please leave your name along with either your email, phone number, or any other contact method. Will respond as quickly as possible</p>
            </form>
            <section id="contact__other">
                <div className="contact__card">
                <img src={location}/>
                <h3>Located AT:</h3>
                <p>Southern California</p>
                </div>
                <div className="contact__card">
                <img src={email}/>
                <h3>EMAIL ME AT:</h3>
                <p>2940cristian@gmail.com</p>
                </div>
                <div className="contact__card">
                <img src={phone}/>
                <h3>CALL ME AT:</h3>
                <p>760-889-6247</p>
                </div>
            </section>
            <footer>
                <p>&copy; Cristian Garcia 2018</p>
            </footer>
            </section>
        </body>
        )
    }
}
