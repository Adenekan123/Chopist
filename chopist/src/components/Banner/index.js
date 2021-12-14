import React from "react";

import {Wrapper,Content,Ingredients,Description} from './Banner.style';
import ButtonElement from '../Button/index';


const Banner = ({image,meal,ingredients,description=null,setModal})=>(
    <Wrapper>
        <Content>
            <div>
                <h1>{meal}</h1>
                <p>Ingredients</p>
                <Ingredients>
                    {ingredients && ingredients.map((ingredient,index)=> <li key={index+ingredient}>{ingredient}</li>)}
                </Ingredients>
                <div>
                    {
                        description ?
                        
                        <Description>
                            <p>Description</p>
                            <p>{description}</p>
                        </Description>
                        : null
                    }
                </div>
                <ButtonElement value="Order Now" className={'order'} />
                <ButtonElement setModal={setModal}  value="How its made" className={'watch'} icon={<i className="far fa-play-circle"></i>} />
            </div>
            <div>
                <img src={image} alt="" />
            </div>

            
            
        </Content>
         
    </Wrapper>
);

export default Banner;