import React from "react";


import {Button} from './Button.styles';

const ButtonElement = ({value,className,icon='',setModal}) =>(
    <>
    {setModal ? <Button onClick={() => setModal(true)} {...setModal } className={className}> {icon} {value}</Button> : <Button className={className}> {icon} {value}</Button> }
    </>
);

export default ButtonElement;