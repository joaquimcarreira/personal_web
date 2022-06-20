import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import profileImg from "./../../imgs/profile.jpg"
import { ArrowDownwardSharp } from "@material-ui/icons"
import { init } from "ityped"
export default function Intro() {
    const textRef = useRef()

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={profileImg} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, im</h2>
                    <h1>Joaquim</h1>
                    <h3 >Industrial Engineer working with data</h3>
                    <a href="#portfolio">
                        <ArrowDownwardSharp className='arrow'></ArrowDownwardSharp>
                    </a>
                </div>
            </div>
        </div>
    )
}
