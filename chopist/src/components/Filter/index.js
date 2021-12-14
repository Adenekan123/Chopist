import {useState,useEffect,useRef} from 'react';


import {Wrapper,Content} from './Filter.styles';
const initialFilterState = {
    area:'',
    letter:'',
    category:''
};

const Filter = ({categories,areas,setFilter}) =>{
    const [state,setState] = useState(initialFilterState);
    const [filtered,setFiltered] = useState(false);
    const initial = useRef(true);


    function updateState(event){
        const newState = {...initialFilterState};
        newState[event.currentTarget.name] = event.currentTarget.value;
        setState(newState);
    }
    
    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            setFilter(state);
            setFiltered(true);
        },[100]);

        return () => clearTimeout(timer);
    },[state,setFilter]);


    return(
        <Wrapper>
            <Content>
            <h1>Filter By</h1>
                <select name="category" onChange={updateState}>
                    <option value="">---Categories---</option>
                    {categories.map(category=>  <option key={Math.random()} value={category['strCategory']}>{category['strCategory']}</option> )}
                </select>
                <select name="area" id="" onChange={updateState}>
                    <option value="">---Areas---</option>
                    {areas.map(area=>  <option key={Math.random()} value={area['strArea']}>{area['strArea']}</option> )}
                </select>
                {/* <select name="letter" id="" onChange={updateState}>
                    <option value="">---First Letter---</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="N">N</option>
                    <option value="O">O</option>
                    <option value="P">P</option>
                    <option value="Q">Q</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                    <option value="T">T</option>
                    <option value="U">U</option>
                    <option value="V">V</option>
                    <option value="W">W</option>
                    <option value="X">X</option>
                    <option value="Y">Y</option>
                    <option value="Z">Z</option>
                </select> */}

                {filtered && <i class="fas fa-times" onClick={()=>window.location.reload()}></i>}
            </Content>
        </Wrapper>
    );
}


export default Filter;