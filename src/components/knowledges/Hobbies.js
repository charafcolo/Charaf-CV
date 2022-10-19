import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='bi bi-headphones'></i>
                    <span>Beatmaking</span>
                </li>
                {/* <li className='hobby'>
                <i className="fas fa-person-running"></i>
                    <span>course à pied</span>
                </li> */}
                <li className='hobby'>
                    <i className='bi bi-brush-fill'></i>
                    <span>Sneakers custom</span>
                </li>
            </ul>
            
        </div>
    );
};

export default Hobbies;