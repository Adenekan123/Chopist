import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-height:calc(100vh - 14rem);
width:100%;
font-size:var(--fontMed);

${'' /* background: var(--lightGrey); */}
${'' /* background:linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%
    );


background-position: 100% cover;
background-size: cover;
background-repeat: no-repeat; */}

${'' /* &::before{
        content: '';
        display:inline-block;
        position:absolute;
        left:0;
        bottom:0;
        height:50%;
        width:25rem;
        background-image:url('https://www.pngall.com/wp-content/uploads/9/Crispy-Fried-Chicken-PNG-Image-HD.png');
        background-repeat: no-repeat;
        z-index:-1;
    } */}
&::after{
        content: '';
        display:inline-block;
        position:absolute;
        top:0;
        right:0;
        height:100%;
        width:25rem;
        background:url('https://africa-public.food.jumia.com/assets/production/ng/layout/themes/capricciosa_hellofood/images/en/jumiafood-homepage-right-splash-services.jpg?v=1638359753');
        background-repeat: no-repeat;
        background--attachment: fixed;
    
        z-index:-1;

        @media(max-width:900px){
            background:linear-gradient(rgba(255, 255, 255,.8),rgba(255, 255, 255,.8)),url('https://africa-public.food.jumia.com/assets/production/ng/layout/themes/capricciosa_hellofood/images/en/jumiafood-homepage-right-splash-services.jpg?v=1638359753');
        }
    }

    
`

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-wrap: wrap;
    position:relative;
    padding: var(--padding);

    
    


    & > div{
        flex-basis: 60rem;

        h1{
            font-size:var(--fontXBig);
            color: var(--medGrey);
            margin-bottom:2rem;
        }

    p{
        font-size:var(--fontMed);
        color: var(--medGrey);
        font-weight:bold;
        letter-spacing:1rem;
        margin-top:4rem;


    };

        img{
            width:80%;
            height:100%;
            object-fit:cover;
            object-position:center;
            ${'' /* border-radius:50%; */}
            box-shadow: 0px 25px 35px rgba(0,0,0,.10);

            @media(max-width:900px){
                width:100%;

            }
            

        }


        &:nth-child(2){
            ${'' /* margin-left:10rem; */}
            align-self:flex-start;
            overflow:hidden;
            border-radius:1rem;

            @media(max-width:900px){
                order:-1;
            }
        }
    }`

    export const Ingredients = styled.div`
        ${'' /* display: flex; */}
        flex-wrap: wrap;
        margin-bottom:4rem;

        ${'' /* @media(max-width:900px){
            background-color: rgba(255, 255, 255,.8);
            padding:1rem;
        } */}


        
         
         li{
             flex: 1 0 34%;
             list-style:round;
             position:relative;
             display: inline-flex;
             align-items:center;
             margin-bottom:1.5rem;
             text-transform:capitalize;

             :not(:last-of-type){
                 margin-right:3rem;
             }

             ::before{
                content:'';
                display:inline-block;
                width:.8rem;
                height:.8rem;
                border-radius:2rem;
                background-color: var(--medGrey);
                margin-right:1rem;
             }
         }
    `
    export const Description = styled.div`
       
        margin-bottom:4rem;
        ${'' /* @media(max-width:900px){
            background-color: rgba(255, 255, 255,.8);
            padding:1rem;
        } */}


       


        
         
         p:nth-child(2){
            letter-spacing:initial;
            line-height:4rem;
            font-weight:initial;
            text-align:justify;

         }
    `

    


    
  
