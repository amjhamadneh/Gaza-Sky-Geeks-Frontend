import { React, useState } from 'react';

const CreatePost = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	}
	const handleChangeBody = (e) => {
		setBody(e.target.value);
	}

	const submit = () =>{
		if(title && body){
			props.onCreatePoat({"userId": 1,"id": 2,"title":title, "body":body});
			setTitle("");
			setBody("");
		}
	};

	return <div>
			<h1>Create Post</h1>
			Title : <input  type="text" value={title} onChange={handleChangeTitle}/><br/>
			Body :<input type="text" value={body} onChange={handleChangeBody}/><br/>
			<button style={{'backgroundColor':'black', 'color':'white', 'width':'100px'}} onClick={submit}>Post</button>
	</div>
}

export default CreatePost;
