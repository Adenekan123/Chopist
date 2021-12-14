
import {Wrapper,Content} from './Modal.styles';

import Iframe from '../Iframe/index';


const Modal = ({setModal,vidLink}) =>{   

if(!vidLink) return null;
    return(
        <Wrapper>
            <Content>
                <Iframe vidLink={vidLink}/>
            </Content>
            <i class="fas fa-times" onClick={() => setModal(false)}></i>
        </Wrapper>
    )
}

export default Modal;