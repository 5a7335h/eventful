import React from 'react';

export const Event = ({id, summary}) => {
    return (<tr>
        <td>{id}</td>
        <td>{summary}</td>
        </tr>);
};