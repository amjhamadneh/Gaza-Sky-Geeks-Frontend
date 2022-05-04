
import {useState} from 'react';

const Header = (props) =>{
    const [title, setTitle] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAdd = () => {
        if(title != ""){
            props.onClickAdd({
                id:Math.random(),
                title:title,
                date:new Date()
            });
            setTitle("")
        }
    }

    return (
        <div style={{'alignItems':'center','justifyContent':'space-between','backgroundColor':'#1C0A00','height':'70px','display':'flex','margin':'auto','marginTop':'2px','borderRadius':'5px'}}>
            <input style={{'color':'white','outline': 'none','backgroundColor':'#1C0A00','border':'none','width':'400px', 'height':'40px','margin':'5px'}} type="text" value={title} onChange={handleTitle} />
            {/* <button style={{'width':'40px','height':'44px','margin':'5px'}} onClick={handleAdd}> </button> */}
            <button onClick={handleAdd} style={{'borderRadius':'5px','border':'none','backgroundColor':'#8FBDD3','width':'40px','height':'44px','margin':'5px'}}><i class="glyphicon glyphicon-ok"></i></button>
        </div>
    );
}

export default Header;