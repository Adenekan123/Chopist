import {useEffect,useState} from 'react';

//Helpers
import API from  '../API';
import {isPersistedState} from '../helpers';


const initialState = {
    meals:[]
};
const initialFilterState = {
    area:'',
    letter:'',
    category:''
};

export const useHomeFetch = () =>{
    const [foods,setFoods] = useState(initialState);
    const [categories,setCategories] = useState('');
    const [areas,setAreas] = useState('');
    const [filter,setFilter] = useState(initialFilterState);
    const [searchTerm,setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(false);
    // const [filterValue,setFilterValue] = useState('');

    const fetchFoods = async (searchTerm ='') =>{
        try{
            setError(false);
            setLoading(true);
            console.log(loading,1);
            
            const result = await API.fetchFoods(searchTerm);
            setFoods(result);
        }catch(err){
            setError(true);
        }

        setLoading(false);
        console.log(loading,2);

    }
    const fetchFoods_filter = async (filter) =>{
        try{
            setError(false);
            setLoading(true);
            console.log(loading,1);
            
            const result = await API.fetchFoods_filter(filter);
            setFoods(result);
        }catch(err){
            setError(true);
        }

        setLoading(false);
        console.log(loading,2);

    }

    const fetchCategories = async () =>{
        try{
            const result = await API.fetchCategories();
                setCategories(result);            
        }catch(err){
            console.log(err,'inside');
        }
    }
    const fetchAreas = async () =>{
        try{
            const result = await API.fetchAreas();
                console.log(result,'From Areas');
                setAreas(result);            
        }catch(err){
            console.log(err,'inside');
        }
    }

    //Initial Render
    useEffect(()=>{
        // if(!searchTerm){
        //     const sessionState = isPersistedState('homeState');

        //     if(sessionState){
        //         setFoods(sessionState);
        //         return;
        //     }
        // }
        setFoods(initialState);
        fetchFoods(searchTerm);
    },[searchTerm]);

    
    //Render by filter
    useEffect(()=>{
        let currentFilter = {...filter};
        const filtered = Object.keys(currentFilter).some(key => currentFilter[key] !== '' && currentFilter[key] !== null);

        if(filtered){
            console.log('ran filter 1');
            fetchFoods_filter(filter);
            console.log('ran filter');
            return;
        }

        console.log('ran filter 2');
       
    },[filter]);

    //Fetch filter values
    useEffect(()=>{
        setCategories(initialState);
        fetchCategories();

        setAreas(initialState);
        fetchAreas();

    },[]);

    //Write to sessionStorage
    // useEffect(()=>{
    //     if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(foods))
    // },[searchTerm,foods]);

    
    return {foods,categories,areas,searchTerm,setSearchTerm,filter,setFilter,error,loading};
}

