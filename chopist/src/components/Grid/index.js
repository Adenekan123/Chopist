import {Wrapper} from './Grid.styles';



//Components
import Thumbnail from '../Thumbnail/index';

const Grid = ({foods}) =>{
    if(foods.length === 0) return false;
    // console.log(foods,'From Grid');
    return(
        <Wrapper>
            {foods.map((food, index)=> <Thumbnail key={index+food.idMeal} meal={food} /> )}
        </Wrapper>
    )
   

}

export default Grid;