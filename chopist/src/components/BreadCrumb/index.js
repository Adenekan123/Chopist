import {Wrapper} from './BreadCrumb.styles';
import {Link} from 'react-router-dom';

const BreadCrumb = () => (
    <Wrapper>
        <Link to='/'>Home</Link> 
        <span>|</span>
        <Link>Food</Link>
    </Wrapper>
);

export default BreadCrumb;