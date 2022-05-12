import React from 'react';

const MainButton = ({children}) => {
    return (
        <button className="px-10 mt-10 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary">{children}</button>
    );
};

export default MainButton;