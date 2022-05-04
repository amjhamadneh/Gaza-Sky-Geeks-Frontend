import React,{useState} from 'react'
import Header from '../components/Header';
import { TodoItem } from '../components/TodoItem';
import { Footer } from './Footer';

const ToDo = () =>{
    const [list, setList] = useState([]);

    const handleAddItem = (newItem) => {
        setList(pre => [newItem, ...pre]);
    }

    const handleDeleteItem = (id) => {
        const newList = list.filter(item => item.id != id);
        setList(newList);
    }

    const handleClearAll = () => {
        setList([]);
    }

    return (
        <div style={{'boxShadow':'0.2px 0.2px 0.4px 0.8px silver','borderRadius':'5px','margin':'auto','backgroundColor':'white','padding':'10px','width':'500px','textAlign':'center','marginTop':'100px'}} >          
            <h1>To Do App</h1>
            <Header onClickAdd={handleAddItem} />
            {list.map(item => <TodoItem title={item.title} id={item.id} onClickDelete={handleDeleteItem}/>)}
            <Footer number={list.length} onClickClear={handleClearAll}/>
        </div>   
    );
}
export default ToDo;
