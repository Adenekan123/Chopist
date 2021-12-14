import {useState} from 'react';

const useModal = () =>{

    const [state,setState] = useState(false);


    return{state,setState}
}

export default useModal;