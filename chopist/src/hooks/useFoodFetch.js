import {useEffect,useState} from 'react';

//API
import API from '../API';

//Helper
import {isPersistedState} from '../helpers';


export const useFoodFetch = (foodId) =>{

    const [state,setState] = useState({});
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

   
    useEffect(()=>{

        console.log('got in here');

        const  fetchFood = async () => {
            try{
                setLoading(true);
                setError(false);

                const food = await API.fetchFood(foodId);
                console.log(food, 'from use Food fetch');

                setState(food);
                setLoading(false);

            }catch(err){
                setError(true);
                setLoading(false);
                return;
            }
        }

        const sessionState = isPersistedState(foodId);
        if(sessionState){
            setState(sessionState);
        }


        fetchFood();
    },[foodId]);


    //Write to sessionStorage 
    useEffect(()=>{
            sessionStorage.setItem(foodId,JSON.stringify(state));
    },[foodId,state]);


    return {state,loading,error};
}


