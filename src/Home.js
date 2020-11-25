import { BatteryUnknownRounded } from '@material-ui/icons';
import React from 'react';
import './Home.css';
import homeBanner from './img/home_banner.jpg';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className='home__image' src={homeBanner} alt=""/>
                
                <div className="home__row">
                    <Product 
                        title="The Lean Startup"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                        />
                    <Product />
                </div>
                
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                
                <div className="home__row">
                <Product />
                </div>
            </div>
            
        </div>
    )
}


export default Home
