import {Wrapper} from './Thumbnail.styles';
import {Link} from 'react-router-dom';

//Helper

const Thumbnail = ({meal}) =>{
    const {idMeal,strMeal:title,strMealThumb:image, strCategory:category,strArea:country} = meal;
    return (
         <Wrapper className="card">
            <Link to={`/${idMeal}`}>
                <div className="head">
                    <img src={image} alt="" />
                    <span><i className="fas fa-map-marker-alt"></i>{country}</span>
                </div>
                <div className="body">
                    <h1>{title ? title : 'Not Set'}</h1>
                    <div>  
                        <p><b>Category: </b>{category ? category : 'Note set'}</p>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                    
                </div>
             </Link>
         </Wrapper>
    );
}
   


export default Thumbnail;