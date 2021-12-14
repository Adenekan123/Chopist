import {useParams} from 'react-router-dom';

//Hooks
import useModal from "../hooks/useModal"; 
import {useFoodFetch} from '../hooks/useFoodFetch';

//Components
import Spinner from '../components/Spinner';
import BreadCrumb from '../components/BreadCrumb';
import Banner from '../components/Banner';
import Modal from './Modal';



//Helper
import {getIngredients} from '../helpers';




const Food = () =>{
    const {foodId} = useParams();

    const {state:modal, setState:setModal} = useModal();
    const {state:food,error,loading} = useFoodFetch(foodId);


     if(loading) return <Spinner />

    if(error || !food.meals) return <h1>Something Went Wrong</h1>

    const {meals} = food;
    
    const vidLink = meals[0] ? meals[0].strYoutube: null;
    const ingredients = meals[0] ? getIngredients(meals[0]) : [];

   


    return(
        <>
            {modal && <Modal setModal={setModal} vidLink={vidLink} />}
            <BreadCrumb />
            <Banner  image={ meals[0]['strMealThumb'] } meal={meals[0]['strMeal']} ingredients={ ingredients} description={meals[0]['strInstructions']} setModal={setModal}/>
        </>
    );
    

}

export default Food;