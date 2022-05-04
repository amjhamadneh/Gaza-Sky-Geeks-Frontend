import React from 'react'

export const TodoItem = (props) => {

    const handleDelete = () => {
        props.onClickDelete(props.id);
    }

    return (
        <li>
            {props.title}
            <span onClick={handleDelete} className="icon">
                -
            </span>
        </li>
    )
}
