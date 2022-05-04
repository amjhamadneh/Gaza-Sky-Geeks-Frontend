import React,{useState} from 'react'
import Header from '../components/Header';
import { TodoItem } from '../components/TodoItem';
import { Footer } from '../components/Footer';
import '../css/Todo.css';

const ToDo = () =>{
    const [list, setList] = useState([]);

    const handleAddItem = (newItem) => {
        setList(pre => [newItem, ...pre]);
    }

    const handleDeleteItem = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const handleClearAll = () => {
        setList([]);
    }

    return (
        <div className="wrapper">
            <Header onClickAdd={handleAddItem} />
            <ul className="todoList">
                {list.map(item => <TodoItem title={item.title} id={item.id} onClickDelete={handleDeleteItem}/>)}
            </ul>
            <Footer number={list.length} onClickClear={handleClearAll}/>
        </div>
    );
}
export default ToDo;
