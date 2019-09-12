import React from "react";
import './menu-item.styles.scss'

export const MenuItem = ({title, img, size}) => (
    <div className={`menu-item ${size}`}  >
        <div className="background-image" style={{backgroundImage: `url(${img}`}}></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>);
