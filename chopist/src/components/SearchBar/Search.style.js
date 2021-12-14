import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--lightGrey);
    display: flex;
    align-items: center;
    justify-content: center;
    height:8rem;
    position:sticky;
    top: 0;
    z-index:1;
`;

export const Content = styled.div`
    width: 100%;
    padding:1rem 3rem;
    position: relative;
    font-size:2rem;


    i{
        color: var(--medGrey);
        position:absolute;
        left:7rem;
        top:50%;
        transform:translateY(-50%);

    }

    input{
        width: 100%;
        border-radius:6rem;
        padding: 1.5rem 1rem;
        border:0px;
        background-color: var(--white);
        box-shadow:var(--shadowSoft);
        padding-left:6rem;
        font-size:inherit;
        outline:1px solid lightgrey;


        :focus,
        :active{
            outline:2px solid lightgrey;
        }
    }
`