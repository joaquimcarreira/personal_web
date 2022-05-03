import React, { useState } from 'react'
import "./portfolio.scss"
import PortfolioList from "../portfoliolist/PortfolioList.jsx"
export default function Portfolio() {
    const [selected, setSelected] = useState("apps")
    const list = [
        {
            id: "apps", title: "Applications",
        },
        {
            id: "anal", title: "Analytics"
        },
        {
            id: "blog", title: "Blog"
        }

    ];

    return (
        <div className='portfolio' id='portfolio' >
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    ></PortfolioList>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
