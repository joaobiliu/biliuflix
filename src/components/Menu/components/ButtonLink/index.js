import React from 'react';

function ButtonLink(props) {
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            São Francisco de Assis
        </a>
    );
}

export default ButtonLink;