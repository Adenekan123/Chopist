import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:2rem;
    ${'' /* flex:1; */}
    
    @media(max-width:900px){
        padding: 2rem .5rem;

    }
}
    
`