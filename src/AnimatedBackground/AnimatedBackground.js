import React, { useEffect, useState } from "react";
import image1 from '../Resources/Optimized-1.jpg';
import image2 from '../Resources/Optimized-2.jpg';
import './AnimatedBackground.css'


const AnimatedBackground = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageArr                        = [image1, image2];

    const backgroundSliderStyle = {
        padding: '190px',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${imageArr[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        width: '100%',
        height: '100%',
        transition: '3s cubic-bezier(.19,.11,0,1.02)'
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
                        <form className = "form d-flex">
                            <input type = "email" className = "form-control" name = "email" placeholder = "Email Address" required = "" />
                            <button type = "submit" className = "btn btn-default btn-border btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedBackground;