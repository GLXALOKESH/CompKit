import React from 'react'

const Container = (props) => {
    const headerdiv ={
        margin: "5px 0px",
        display:"flex",
        flexDirection:props.vertical?"column":"row",
        ...(props.vertical?{alignItems:props.headerAlign?props.headerAlign:"left",justifyContent:"center"}:{justifyContent:props.headerAlign?props.headerAlign:"left",alignItems:"center"}),
        width:"100%",

        gap:"5px"

    }

    const baseclass = {
        boxSizing: "border-box",
        height: props.height? props.height: "fit-content",
        backgroundColor: props.bg? props.bg: "transparent",
        padding: props.padding? props.padding:"10px",
        width: props.width? props.width: "100%",
        color: props.color? props.color:"black",
        fontWeight: "600",
        fontFamily:props.family?props.family: "sans-serif",
        fontSize: props.fontSize?props.fontSize:"16px",
        ...(props.overflow && {overflow:"hidden"}),
        borderRadius:props.rounded?(props.rounded === "full"?"999px":props.rounded):"",
        textAlign:props.align?props.align:"left"
    }

    const headerstyle = {
        fontSize : props.headerSize?props.headerSize:(props.fontSize?`calc(${props.fontSize} *1.5)`:"18px"),
        color: props.headerColor? props.headerColor:"black",
        fontFamily:props.headerFamily?props.headerFamily: "sans-serif",

    }
    const headerImgstyle = {
        height:props.icoSize?props.icoSize:"15px"
    }
    const divider = {
        marginBottom: "10px",
        width:"100%",
        backgroundColor:"rgba(0, 0, 0, 0.500)",
        height:"2px",
    }
    return (

        <>
            <div style={baseclass}>
                <div style={headerdiv}>
                {(props.headerType === "ico" || props.headerType === "ico-text") && <img src={props.ico} style={headerImgstyle} alt="headerImage" />}
                
                {props.header && (props.headerType === "ico"?"":<h2 style={headerstyle}>{props.header}</h2>)}
                </div>
                
                {props.divider && <div style={divider}></div>}
                {props.content}
            </div>
        </>
    )
}

export default Container
