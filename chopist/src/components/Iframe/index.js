

const Iframe = ({vidLink}) =>{

    const address = 'https://www.youtube.com/embed/'+vidLink.split('=')[1];

    return (
        <iframe  src={address} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
        
}

export default Iframe;