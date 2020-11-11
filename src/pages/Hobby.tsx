import React from 'react';
import {HoobyCard} from "../components/card/HobbyCard";

export const Hobby = () => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="hobby">
        <div className="w-100">
            <h2 className="mb-5">Hobby</h2>
            <HoobyCard/>
        </div>
    </section>
}