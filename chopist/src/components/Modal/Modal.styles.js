import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--medGrey);
    z-index: 10;
    padding:2rem;

    display:flex;
    justify-content: center;

    i{
        display:inline-block;
        position:absolute;
        top:2rem;
        right:2rem;
        font-size: var(--fontBig);
        color: var(--white);
    }

    
`

export const Content = styled.div`
    height:50rem;
    width: 60rem;

    iframe{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`