import React, { useState } from 'react';
import './Collapse.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <div className='collapsediv' onClick={toggleCollapse}>
                <h2 className='collapsetitle'>{title}</h2>
                <MdOutlineArrowBackIosNew className={`arrow ${isOpen ? '' : 'arrowdown'}`} />
            </div>
            {isOpen  && <div className='collapsecontent' >{children}</div>}
        </div>
    );
}

export default Collapse;