
import React from 'react'
import classes  from './man.module.css';
import HeaderBackground from '../../Components/Text/text';
import {bannerBG} from '../../assets/images';
import { SimpleCard, CardMenuItem } from '../../Components/MegaMenu/Components/card';
import {FlatButton, LinkFlatButton} from '../../Components/buttons';

const Man=()=>{
    
    return (
    <div className={`${classes.main} col`}>
        <div className={classes.banner} style={{background:`url(${bannerBG})`}}>
        <HeaderBackground className="subtitle primary">    
        
        We’ve extended returns to 90 days & made deliveries safer - so you can carry on
        <br/>   
         enjoying ASOS. Read our coronavirus FAQs >
                                                                                                                            
        </HeaderBackground>
        </div>

        <div className={`${classes.big_banner} col`}>
        <HeaderBackground>    
         SALE: FURTHER REDUCTIONS
          <br/>        
          UP TO 70% OFF                                                                                      
        </HeaderBackground>

        <div className={` ${classes.card_list}`}>
            <SimpleCard text="SHOES & TRAINERS" image="https://images.asos-media.com/products/nike-air-max-270-react-trainers-in-off-white/13337204-1-offwhite?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"/>
            <SimpleCard text="T-SHIRTS & VESTS" image="https://images.asos-media.com/products/asos-design-organic-oversized-t-shirt-with-half-sleeve-and-vertical-colourblock-in-navy/13650041-1-navy?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"/>
            <SimpleCard text="LOUNGEWEAR LOOKS" image="https://images.asos-media.com/products/asos-design-co-ord-tapered-joggers-with-zip-details-in-washed-black/14112753-1-grey?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"/>
            <SimpleCard text="SNEAKER BRANDS" image="https://images.asos-media.com/products/adidas-originals-overhead-half-zip-fleece-jacket-with-3-stripes-in-navy-tech-pack/12864127-1-navy?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"/>
            <SimpleCard text="HOODIES & SWEATSHIRTS" image="https://images.asos-media.com/products/asos-design-oversized-hoodie-with-colour-blocking-in-navy-grey-burgundy/14030340-1-navy?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"/>
            <SimpleCard text="JEANS" image="https://images.asos-media.com/products/asos-design-tapered-jeans-in-vintage-mid-wash-blue-with-rips/13229489-1-midwashvintage?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"/>
        </div>
      
        <div className={classes.big_banner_button}>
        <LinkFlatButton Link="man/shopByProduct" color="invert">View All</LinkFlatButton>
        <p>Limited time only. Selected styles marked down on site.</p>
        </div>
    
        </div>
        
        <div className={classes.img_banner}>
            <img src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/newstufftoscroll_desktophero_gbl_1258x600.jpg"/>
            <div>
                <h1>
                    Fresh Style
                </h1>
                <FlatButton width="50%" color="invert" border="2px solid white">SHOP NOW</FlatButton>
            </div>
           
        </div>
    
        <div className={` ${classes.card_list_4}`}>
            <SimpleCard text="T-SHIRT TIME" image="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay1.jpg"/>
            <SimpleCard text="LOUNGEWEAR" image="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay2.jpg"/>
            <SimpleCard text="SNEAKER BRANDS" image="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay3.jpg"/>
            <SimpleCard text="SMART TOPS" image="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay4.jpg"/>
        </div>
    
    <div className={classes.card_list_2}>
        <div>
            <CardMenuItem text="ACTIVEWEAR" image="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/activewear_gbl_moment_870x1110.jpg"/>
            <FlatButton color="invert" border="2px solid black" width="40%">SHOP ACTIVEWEAR</FlatButton>
        </div>
        <div>
            <CardMenuItem text="TOPMAN" image="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/topman_gbl_moment_870x1110.jpg"/>
            <FlatButton color="invert" border="2px solid black" width="40%">SHOP THE BRAND</FlatButton>
        </div>
    </div>

    <div className={classes.brands}>
        <h1>
            Tranding Brands
        </h1>

        <div className={`${classes.brands_list} row space-around`}>
            <a href="#">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/tommy-hilfiger-hp-logos-256x256.jpg"/>
            </a>
            <a href="#">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/north-face.png"/>
            </a>
            <a href="#">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/nike-hp-logos-256x256.jpg"/>
            </a>
            <a href="#">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/carhartt-hp-logos-256x256.jpg"/>
            </a>
            <a href="#">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/ellesse-hp-logos-256x256.jpg"/>
            </a>
            <a href="#">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/dr-martens-hp-logos-256x256.jpg"/>
            </a>
        </div>
    </div>
    </div>
    )
}

export default Man;