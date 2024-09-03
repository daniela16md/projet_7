import React, { useState } from 'react';
import '../style/Collapse.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collpase'>
            <div className='collpasediv' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <MdOutlineArrowBackIosNew className={`arrow ${isOpen ? '' : 'arrowdown'}`} />
            </div>
            {isOpen  && <div className='collpasecontent' >{children}</div>}
        </div>
    );
}

export default Collapse;