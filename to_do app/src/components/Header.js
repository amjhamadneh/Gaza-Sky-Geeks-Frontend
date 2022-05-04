
import React, {useState} from 'react';
import '../css/Todo.css';

const Header = (props) =>{
    const [title, setTitle] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAdd = () => {
        if(title !== ""){
            props.onClickAdd({
                id:Math.random(),
                title:title,
                date:new Date()
            });
            setTitle("")
        }
    }

    return (
        <>
            <header>Todo App</header>
            <div className="inputField">
                <input type="text" value={title} placeholder="Add your new todo" onChange={handleTitle} />
                <button onClick={handleAdd} > + </button>
            </div>
        </>
    );
}

export default Header;