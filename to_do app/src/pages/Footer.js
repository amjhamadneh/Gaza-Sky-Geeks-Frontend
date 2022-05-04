import React from 'react'

export const Footer = (props) => {

    const handleClearAll = () => {
        props.onClickClear();
    }

    return (
        <div style={{'color':'blue','alignItems':'center','justifyContent':'space-between','backgroundColor':'#603601','display':'flex','margin':'auto','marginTop':'2px','borderRadius':'5px'}}>
            <span style={{'width':'400px', 'height':'40px','margin':'5px'}}>You have a {props.number} pending todo item</span>
            <button onClick={handleClearAll} style={{'borderRadius':'5px','border':'none','backgroundColor':'#8FBDD3','width':'100px','height':'44px','margin':'5px'}}>Clear All</button>
        </div>
    )
}
