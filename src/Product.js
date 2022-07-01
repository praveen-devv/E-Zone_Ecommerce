import React from 'react'
import { useHistory } from 'react-router';
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,features,rating}) {

    const [{user,basket},dispatch] = useStateValue();
    const history = useHistory();

    const addToBasket =() =>{
        if(user){
            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                    id:id,
                    title:title,image:image,
                    features:features,
                    rating:rating
                }
            })
        }
        else{
            history.push('/login')

        }
    }

    return (
        <div className="product">
            <div className="product__info">
                <h5>{title}</h5>
                <p className="features">{features}
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
