import React from 'react'
import { useState } from 'react';

const Button1 = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const baseStyle = {
        boxSizing:"border-box",
        ...(props.base === "hover"?{backgroundColor:"rgb(6, 159, 247)",color: "white"}:{backgroundColor:props.bg?props.bg:'white',color: props.color?props.color:"black",}),
        
        outline: 'none',
        ...(props.noBorder?{border:"none"}:{border: '1px solid black'}),
        padding: '7px 5px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize:props.fontSize?props.fontSize:'1rem',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        transition: 'all 0.2s ease-in-out',
        
    };

    const hoverStyle = {
        backgroundColor:props.bgHover?props.bgHover:'rgb(6, 159, 247)',
        color: props.colorHover?props.colorHover:"rgb(255, 255, 255)",
    };

    const activeStyle = {
        ...(props.bgHover?{backgroundColor:`${props.bgHover}`,filter:"brightness(80%)"}:{backgroundColor: 'rgb(9, 126, 194)'}),
        color: props.colorHover?props.colorHover:"rgb(255, 255, 255)",
    };

    const combinedStyle = {
        ...baseStyle,
        ...(isHovered ? hoverStyle : {}),
        ...(isActive ? activeStyle : {}),
        ...(props.capital?{textTransform:"capitalize"}:{}),
        ...(props.upper?{textTransform:"uppercase"}:{}),
    };

    return (
        <button
            style={combinedStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}
        >
            {props.content?props.content:"Button"}
        </button>
  )
}

export default Button1
