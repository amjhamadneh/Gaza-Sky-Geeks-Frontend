import React from 'react'

export const TodoItem = (props) => {

    const handleDelete = () => {
        props.onClickDelete(props.id);
    }

    return (
        <div style={{'color':'white','alignItems':'center','justifyContent':'space-between','backgroundColor':'#CC9544','display':'flex','margin':'auto','marginTop':'2px','borderRadius':'5px'}}>
            <p style={{'overflow-wrap': 'break-word','width':'400px', 'minHeight':'40px', 'margin':'5px'}}>{props.title}</p>
            <button onClick={handleDelete} style={{'borderRadius':'5px','border':'none','backgroundColor':'#8FBDD3','width':'40px','height':'44px','margin':'5px'}}><i class="glyphicon glyphicon-remove"></i></button>
        </div>
    )
}
