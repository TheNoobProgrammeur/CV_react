import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap/lib';
import profile from '../assert/img/profile.jpg';
import {LiensPartie} from "./liens/LiensPartie";

export const MyNavBare = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return <>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
                id="sideNav"
            >
                <a className="navbar-brand js-scroll-trigger"
                   href="#page-top">
                    <span className="d-block d-lg-none">Antoine BERTHIER</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2"
                         src={profile}
                         alt="profile"/>
                    </span>
                </a>

                <Button className="navbar-toggler" onClick={toggle} >
                    <span className="navbar-toggler-icon"/>
                </Button>

                <Collapse isOpen={isOpen}>
                    <LiensPartie fun={toggle} />
                </Collapse>

                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <LiensPartie fun={{}}/>
                </div>

            </nav>
        </>
}