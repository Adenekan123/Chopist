import React from "react";


//Styled Components
import Spinner from './Spinner';
import Banner from './Banner';
import SearchBar from './SearchBar';
import Main from './Main';
import Modal from './Modal';


//Helper
import  {getIngredients} from '../helpers';

//Hooks
import {useHomeFetch} from "../hooks/useHomeFetch"; 
import useModal from "../hooks/useModal"; 

const Home = () =>{
    const {state:modal, setState:setModal} = useModal();
    const {foods,categories,areas,loading,searchTerm,setSearchTerm,filter,setFilter,error} = useHomeFetch();
    const {meals} = foods;
    const newFilterObj = {...filter}
    const filtered = Object.keys(newFilterObj).some(key => newFilterObj[key] !== '' && newFilterObj[key] !== null);

    console.log({filtered},{newFilterObj});


    if(error) return (<h1>Something Went Wrong</h1>);   
    if(meals == null) return (<h1>No Item(s)</h1>);   
    const ingredients =  meals[0] ? getIngredients(meals[0]): [];

    const vidLink = meals[0] ? meals[0].strYoutube: null;
    return(
        <>
            {loading && <Spinner />}
            {modal && <Modal setModal={setModal} vidLink={vidLink} />}
            {
                !filtered && !searchTerm && meals[0] ?
                <Banner  image={ foods && meals ? meals[0].strMealThumb : '' } meal={meals[0].strMeal} ingredients={ ingredients} setModal={setModal} />
                :null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Main meals={meals} categories={categories.meals} areas={areas.meals} setFilter={setFilter} />
                
            
        </>
    )

        
           
}


export default Home;