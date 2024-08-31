import React, { useState } from 'react';
import '../style/Dropdownopen.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropddiv'>
            <div className='ddodiv' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <MdOutlineArrowBackIosNew className={`arrow ${isOpen ? '' : 'arrowdown'}`} />
            </div>
            {isOpen  && <div className='dropdownp' >{children}</div>}
        </div>
    );
}

export default Collapse;