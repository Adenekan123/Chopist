import {Wrapper} from './Main.styles';

import Filter from '../Filter';
import Grid from '../Grid';

const Main = ({meals,categories,areas,setFilter}) =>{
    // console.log(categories,'From main');
    if(meals.length === 0) return false;

    return(
    <Wrapper>
        <Filter className="filter" categories={categories} areas={areas} setFilter={setFilter}></Filter>
        <Grid className="grid" foods={meals} />
    </Wrapper>
    )
     
};

export default Main;



