import React, { useEffect, useState } from "react";
import image1 from '../Resources/1.jpeg';
import image2 from '../Resources/2.jpeg';
import image3 from '../Resources/3.jpeg';
import './AnimatedBackground.css'


const AnimatedBackground = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageArr                        = [image1, image2, image3];

    const backgroundSliderStyle = {
        padding: '80px',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${imageArr[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -1,
        transition: '1s cubic-bezier(.19,.11,0,1.02)'
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArr.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);

    return(
        <div style = {backgroundSliderStyle}>
            <div>
                <h1 className = "headingTag">
                    Hey Folks. <br/>
                    This Website will be Live Soon!
                </h1>
                <p className = "text-white text-justify" style = {{textAlign: 'left'}}>
                    Fresh design and content is preparing right now. <br/>
                    Don't forget to subscribe to stay tuned!
                </p>
            </div>
            <div className = "row">
                <div className = "col-md-6 col-sm-6">
                    <form className = "form form-inline">
                        <div className = "form-group">
                            <input type = "email" className = "form-control" name = "email" id = "subscribe-email" placeholder = "Email Address" required = "" />
                        </div>
                        <button type = "submit" className = "btn btn-default btn-border btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AnimatedBackground;