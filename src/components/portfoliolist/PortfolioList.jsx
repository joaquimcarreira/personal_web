import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({ title, id, setSelected, active }) {
    return (
        <li
            onClick={() => setSelected(id)}
            className={active ? "portfolioList active" : "portfolioList"}>
            {title}
        </li>
    )
}
