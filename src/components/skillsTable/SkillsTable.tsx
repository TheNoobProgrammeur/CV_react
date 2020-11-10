import React,  { Component } from 'react';
import {listSkills} from "./ListeSkills";
import {ProgressBar} from "./progressBar";
import ReactTooltip from 'react-tooltip';
import {infoIcon} from "../icones";

export const SkillsTable = () => {

    const list = listSkills

    return <>
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Technologie</th>
                <th scope="col">Skill</th>
                <th scope="col">Domaine</th>
            </tr>
            </thead>
            <tbody>

            {list.map(
                (value) => <tr>
                    <td className={"dev-icons"} style={{textAlign: "center"}}>{value.icone}</td>
                    <td style={{fontSize: "x-large", textAlign: "center", verticalAlign: "middle"}} >{value.name}</td>
                    <td width={500} style={{ textAlign: "center", verticalAlign: "middle"}}>
                        <ProgressBar  styleProgress={value.style} labelstyle={value.labelStyles} />
                    </td>
                    <td style={{fontSize: "x-large", textAlign: "center", verticalAlign: "middle"}}>{value.domaine}</td>
                </tr>
            )}
            </tbody>
        </table>
    </>

}