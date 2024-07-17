import React from 'react'
import { useState } from 'react';
// import "./test.css"

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const baseStyle = {
        ...(props.noBorder ? { border: "none" } : { border: '1px solid black' }),
        boxSizing: "border-box",

        ...(props.inverted ? { backgroundColor: "black", color: "white", borderColor: "white" } : (props.base === "hover" ? { backgroundColor: "rgb(6, 159, 247)", color: "white" } : {
            backgroundColor: props.bg ? props.bg : 'white',
            color: props.color ? props.color : "black",
        })),

        ...(props.borderColor ? { borderColor: props.borderColor } : {}),
        outline: 'none',
        padding: props.compact ? "2px" : '7px 5px',
        borderRadius: props.circular ? '999px' : '6px',
        cursor: 'pointer',
        fontSize: props.fontSize ? props.fontSize : '1rem',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        transition: 'all 0.2s ease-in-out',
        ...(props.full ? { width: "100%", justifyContent: "center" } : {}),
        display: "flex",
        alignItems: "center",
        gap: props.gap ? props.gap : "0px",

    };

    const presetBase = {
        ...(props.preset === "default" || props.preset === "primary" || props.preset === "secondery" ? { border: "none" } : {}),

        backgroundColor: props.preset === "default" ?"lightgrey":(props.preset === "primary" ? "rgb(30, 184, 255)"  :props.preset === "secondery" ? "black": ""),

        ...(props.borderColor ? { borderColor: props.borderColor } : {}),

        padding: props.compact ? "2px" : (props.preset ? "8px 7px" : "7px 5px"),
        opacity: props.preset === "default" ||  props.preset === "secondery" ? "70%" : "100%",

        color: props.preset === "primary" || props.preset === "secondery" ?"white":""
    }

    const basicBase ={
        border: "2px solid",
        backgroundColor:props.inverted?"black":"transparent",

        borderColor:props.presetColor === "red"?"red":props.presetColor === "blue"?"blue":props.presetColor === "black"?"black":props.presetColor === "yellow"?"yellow":props.presetColor === "green"?"green":props.presetColor === "grey"?"grey":props.presetColor === "pink"?"pink":props.presetColor === "orange"?"orange":props.presetColor === "brown"?"brown":"",

        color:props.presetColor === "red"?"red":props.presetColor === "blue"?"blue":props.presetColor === "black"?"black":props.presetColor === "yellow"?"yellow":props.presetColor === "green"?"green":props.presetColor === "grey"?"grey":props.presetColor === "pink"?"pink":props.presetColor === "orange"?"orange":props.presetColor === "brown"?"brown":""
    }

    const basicHover ={
        color: "white",
        
        backgroundColor:props.presetColor === "red"?"red":props.presetColor === "blue"?"blue":props.presetColor === "black"?"black":props.presetColor === "yellow"?"yellow":props.presetColor === "green"?"green":props.presetColor === "grey"?"grey":props.presetColor === "pink"?"pink":props.presetColor === "orange"?"orange":props.presetColor === "brown"?"brown":"",
    }

    const basicActive ={
        color: "white",

        backgroundColor:props.presetColor === "red"?"red":props.presetColor === "blue"?"blue":props.presetColor === "black"?"black":props.presetColor === "yellow"?"yellow":props.presetColor === "green"?"green":props.presetColor === "grey"?"grey":props.presetColor === "pink"?"pink":props.presetColor === "orange"?"orange":props.presetColor === "brown"?"brown":"",
        filter:"brightness(80%)",

    }

    const hoverStyle = {
        backgroundColor: props.preset === "default" ? "lightgrey" :props.preset === "primary" ?"rgb(26, 157, 218)": props.preset === "secondery" ? "black": (props.bgHover ? props.bgHover : 'rgb(6, 159, 247)'),

        color: props.preset === "default" ? "black" :props.preset === "primary" ?"white": (props.colorHover ? props.colorHover : "rgb(255, 255, 255)"),
        opacity: props.preset === "default" && "100%"
    };

    const activeStyle = {

        backgroundColor: props.preset === "default" ? "grey" : props.preset === "primary" ?"rgb(22, 137, 190)":props.preset === "secondery" ? "black": (props.bgHover ? props.bgHover : 'rgb(9, 126, 194)'),

        filter: props.bgHover ? "brightness(80%)" : "brightness(100%)",

        color: props.colorHover ? props.colorHover : "rgb(255, 255, 255)",
        opacity: props.preset === "default" && "100%"
    };

    const combinedStyle = {
        ...baseStyle,
        ...(props.preset ? presetBase : baseStyle),
        ...(props.preset === "basic"? basicBase : {}),
        ...(isHovered ? hoverStyle : {}),
        ...(isActive ? activeStyle : {}),
        ...(isHovered && ((props.preset === "basic" && props.presetColor) && basicHover )),
        ...(isActive && ((props.preset === "basic" && props.presetColor) && basicActive )),
        ...(props.capital ? { textTransform: "capitalize" } : {}),
        ...(props.upper ? { textTransform: "uppercase" } : {}),
    };

    return (
        <button type={props.type === "button" ? 'button' : (props.type === "reset" ? 'reset' : (props.type === "submit" ? 'submit' : "button"))}
            style={combinedStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}

            disabled={props.disabled}

            onClick={props.onClick}
        >
            {(props.contentType === "ico-text" || props.contentType === "ico") && props.ico && (
                <img src={props.ico} alt="icon" style={{ height: props.icoSize }} />
            )}
            {props.contentType === "ico-text"
                ? (props.content ? props.content : (props.type === "button" ? 'button' : (props.type === "reset" ? 'reset' : (props.type === "submit" ? 'submit' : "button"))))
                : (props.contentType === "ico"
                    ? ""
                    : (props.content ? props.content : (props.type === "button" ? 'button' : (props.type === "reset" ? 'reset' : (props.type === "submit" ? 'submit' : "button")))))
            }

        </button>
    )
}

export default Button
