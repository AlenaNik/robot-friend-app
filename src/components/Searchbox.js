import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
        return (
            <div className='pa2'>
                <input
                    className='pa3 br3 ba b--dotted bg-lightest-blue'
                    type='search'
                    placeholder='Find you robofriend here: '
                    onChange={searchChange}
                />
            </div>
        );
    }

export default Searchbox;