import React from 'react';
import devicon from 'devicon'

export const Devicon = (props) => {

    let format = `devicon-${props.name}-${props.logoStyle}`;
    return <i className={`${format} ${props.iconClass}`} />

}
