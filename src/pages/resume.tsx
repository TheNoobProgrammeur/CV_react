import {Presentation} from "../components/presentation/presentation";
import {Skills} from "../components/skill/skills";
import {Hobby} from "../components/hobby/hobby";
import React from "react";
import {Experiences} from "../components/experience/experiences";
import {Formation} from "../components/formation/formation";

export const Resume = () => (
    <div className="container-fluid p-0">
        <Presentation/>
        <hr className="m-0"/>
        <Experiences/>
        <hr className="m-0"/>
        <Formation/>
        <hr className="m-0"/>
        <Skills />
        <hr className="m-0"/>
        <Hobby />
</div>
)
