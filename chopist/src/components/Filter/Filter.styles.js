import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 3rem;
    margin-top:  2rem;

    position: sticky;
    top: 8rem;
    z-index: 1;
    background-color: var(--white);
    padding: 1rem 0;

    @media(max-width:1200px){
            margin: 0;
            padding: 1rem ;
        }
`

export const Content = styled.div`
    ${'' /* background-color:var(--lightGrey); */}
    width:100%;
    display:flex;
    @media(max-width:1200px){
        justify-content:center;
    }

    i{
        font-size: var(--fontBig);
        display: inline-block;
        align-self: center;
        color:red;
        cursor: pointer;
    }

    h1{
        color: var(--darkGrey);
        ${'' /* line-height:0; */}
        margin-right:3rem;

        @media(max-width:1200px){
            display:none;
        }
        
    }

    select{
        padding: 1rem 2rem;
        font-size: var(--fontSmall);
        outline:2px solid var(medGrey);

        :not(:last-child){
            margin-right:2rem;
        }


        @media(max-width:1200px){
            padding:  1rem;
        }
    }
`