
import * as  types from '../types'
import axios from 'axios';


const productsReducer=(state,action)=>
{
    const items = [
        {
          "image": "https://images.asos-media.com/products/the-north-face-back-graphic-hoodie-in-cream-exclusive-at-asos/14947049-1-vintagewhite?$n_480w$&wid=476&fit=constrain",
          "price": "ILS367.37",
          "description": "The North Face back graphic hoodie in cream Exclusive at ASOS",
          "discount": "15%"
        },
        {
          "image": "https://images.asos-media.com/products/the-north-face-faces-hoodie-in-cream-exclusive-at-asos/14930788-1-vintagewhite?$n_480w$&wid=476&fit=constrain",
          "price": "ILS367.37",
          "description": "The North Face Faces hoodie in cream Exclusive at ASOS",
          "discount": ""
        },
        {
          "image": "https://images.asos-media.com/products/adidas-zne-3-stripe-zip-thru-hoodie-in-white/13207689-1-white?$n_480w$&wid=476&fit=constrain",
          "price": "ILS446.09",
          "description": "adidas ZNE 3 stripe zip thru hoodie in white",
          "discount": ""
        },
        {
          "image": "//images.asos-media.com/products/celio-linen-shirt-in-navy/14934868-1-navy?$n_480w$&wid=476&fit=constrain",
          "index": 4,
          "description": "adidas ZNE 3 stripe zip thru hoodie in white",

          "price": "£25.00",
          "url": "https://www.asos.com/men/new-in/new-in-clothing/cat/?cid=6993&nlid=mw%7Cclothing%7Cshop%20by%20product&page=3",
          "url_uid": "1"
        }
    ]
    state={items:items}
    switch (action.type) 
    {
        case types.PRODUCTS_GET:  
            return action.product;

        case types.PRODUCTS_GET_ALL:
            {
                return action.products;
            }
        default:
            return {...state};
    }
}

export default productsReducer;