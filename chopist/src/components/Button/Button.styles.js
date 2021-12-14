import styled from 'styled-components';

export const Button = styled.button`
    border:0px;
    outline:0px;
    padding: 1.5rem 2rem;
    ${'' /* border-radius:2rem; */}
    font-size:var(--fontMed);
    cursor:pointer;

    display:inline-flex;
    align-items: center;

    &:not(:last-of-type){
        margin-right:2rem;
    }

    i{
        margin-right:1rem;
    }

    &.order{
        background-color: var(--medGrey);
        color: var(--white);
    }
    &.watch{
        background-color: var(--darkGrey);
        color: var(--white);
    }

    :hover{
        filter:contrast(120%);
    }
`