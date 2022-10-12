import React from 'react';

const Link = ({route}) => {
    return (
      <li className='mt-4' ><a href={route.path}>{route.Name}</a></li>
    );
};

export default Link;