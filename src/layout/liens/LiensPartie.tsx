import React from 'react';
import {listeLiens} from "./liste";

export const LiensPartie = (props: {fun: any}) => {
    const fun = props.fun;
    return <>
        <ul className="navbar-nav">
            {listeLiens.map((value) =>  <li className="nav-item">
                <a className="nav-link js-scroll-trigger" onClick={fun} href={value.lien}>{value.name}</a>
                </li>
            )}
        </ul>
    </>
}