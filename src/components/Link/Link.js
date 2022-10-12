import React from 'react';

const Link = ({route}) => {
    return (
      <li><a href={route.path}>{route.Name}</a></li>
    );
};

export default Link;