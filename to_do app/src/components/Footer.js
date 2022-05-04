import React from 'react'

export const Footer = (props) => {

    const handleClearAll = () => {
        props.onClickClear();
    }

    return (
        <div className="footer">
            <span >You have a {props.number} pending todo item</span>
            <button onClick={handleClearAll} >Clear All</button>
        </div>
    )
}
