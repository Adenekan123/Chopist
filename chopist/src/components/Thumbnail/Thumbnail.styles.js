import styled from 'styled-components';

export const Wrapper = styled.div`
    flex:1 0 35rem;
    padding:1rem;

        a{
            display:block;
            text-decoration:none;

        }

        &.card{
            .head{
                height:30rem;
                width:100%;
                position:relative;
                transition:filter .2s;

                :hover{
                    filter:brightness(70%);
                 }

                span{
                    position:absolute;
                    right:0;
                    bottom:0;
                    padding: .5rem 1rem;
                    background-color: var(--white);
                    color:red;
                    font-size: var(--fontMed);
                    font-weight:bold;

                    display:flex;
                    align-items:center;

                    i{
                        margin-right:1rem;;
                    }
                }

                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    object-position:center;
                }
            }

            .body{
                padding: 1rem 2rem;
                background-color:var(--lightGrey);

                div{
                    display:flex;
                    align-items:center;

                    i{
                        font-size: var(--fontSmall);
                        margin-left:2rem;
                        color:red;
                    }
                    
                }

                
                h1{
                    font-size: var(--fontMed);
                    color: var(--darkGrey);
                    margin-bottom:.3rem;
                }

                p{
                    font-size: var(--fontSmall);
                    color: var(--darkGrey);
                }
            }
        }
`;