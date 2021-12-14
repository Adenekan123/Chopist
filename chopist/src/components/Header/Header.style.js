import styled from 'styled-components';

export  const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:6rem;
    padding: 0 var(--padding);
    background-color: var(--white);
    box-shadow: var(--shadowSoft);
    font-size:var(--fontMed);
    font-weight:bold;
    
`;


export const Logo = styled.h1`
    font-size: var(--fontMed);
    color: red;
    font-size: var(--fontMed);

`
export const Nav = styled.ul`
    font-size: var(--fontSmall);
    color: var(--lightGrey);
    list-style: none;
    display:flex;

    p{
        color: var(--medGrey);
        font-size: 1.6rem;

    }

    b{
        color:red;
    }

    li{

        a{
            text-decoration:none;
            color: var(--lightGrey);
        }

        &.active{
            a{
                color: var(--medGrey);
            }
        }
    }



    li:not(:last-of-type){
        margin-right:5rem;
    }

`


