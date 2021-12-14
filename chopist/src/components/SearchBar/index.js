import {useEffect,useState,useRef} from 'react';



//Styled components
import {Wrapper, Content} from './Search.style';




const SearchBar = ({setSearchTerm}) => {
    const [state,setState] = useState('');
    const initial = useRef(true);


    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }

        console.log(state);
        const timer = setTimeout(()=>{
            setSearchTerm(state);
            console.log('set the search term');
        },500);

        return () => clearTimeout(timer);
    },[setSearchTerm,state]);


    return(
        <Wrapper>
            <Content>
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Search Meal" onChange ={event=>{setState(event.currentTarget.value)}}  value={state} />
            </Content>
        </Wrapper>
        );
   }

export default SearchBar;