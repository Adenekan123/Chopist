import styled from 'styled-components';

export const Wrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100%;

position:fixed;
left:0;
top:0;
width:100%;
font-size:var(--fontXBig);

background-color: rgba(255, 255, 255,.5);
color:red;
z-index:10;

i{
    -webkit-animation: fa-spin 1s infinite linear;
  animation: fa-spin 1s infinite linear;
}

`