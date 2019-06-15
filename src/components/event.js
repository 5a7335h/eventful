import React from 'react';

export const Event = ({id, summary}) => {
    return <div>{`${id}    |      ${summary}`}</div>;
};