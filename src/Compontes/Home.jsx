import React from 'react';
import Slider from './Slider';
import About from './About';
import Image_slider from './Image_slider';
import Client from './Client';
import Services from './Services';
import Portoflio from './Portoflio';
import Team from './Team';
import Price from './Price';
import Question from './Question';
import Blog from './Blog';
import Contact from './Contact';
function Home(props) {

    // console.log(props.portoimg);

    return (
        <>
            <Slider Boxs={props.Box}/>

            <About />

            <Image_slider testis={props.testi}/>

            <Client />

            <Services services1={props.services}/>

            <Portoflio port={props.portoimg}/>

            <Team Team1={props.team}/>

            <Price Prices={props.Price}/>

            <Question />

            <Blog />

            <Contact />
        </>
    )
}

export default Home