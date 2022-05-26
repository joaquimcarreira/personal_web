import React, { useState } from 'react'
import "./portfolio.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './projects/movie';


// import PortfolioList from "../portfoliolist/PortfolioList.jsx"
export default function Portfolio() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <div className="container" >
                <div className="item" onClick={handleShow}>
                    <div onClick={e => e.stopPropagation()}>
                        <Movie props={{ show, handleClose, handleShow }}></Movie>
                    </div>

                    <h3>Movie industry</h3>
                    <img src="" alt="" />
                </div>
                <div className="item">
                    <h3>Financial Dashboard</h3>
                    <img src="personal_web/personal_web/public/assets/financial.png" alt="" />
                </div>
                <div className="item">
                    <h3>Supermarket scrapper</h3>
                    <img src="" alt="" />
                </div>
                <div className="item">
                    <img src="" alt="" />
                </div>
            </div>
        </div >
    )
}
