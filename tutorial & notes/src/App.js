import { React, useState, useEffect } from 'react';
import {WelcomeMessage} from './WelcomeMessage'
import CreatePost from './createPost';
import './style.css'
import {Post} from './Post.js'
import {Counter} from './Counter'

const App = () => {
	const [posts, setPosts] = useState([]);

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts')
	  .then(response => response.json())
	  .then(json => setPosts(json));
	},[]);


	/*   Way One   */
	
	/* return(
	 	posts.map(post => <Post key={post.id} title={post.title} imageSrc={post.imageSrc} body={post.body}/>)
	); */

	/*   Way Two   */
	const addPost = (newPost) => {
		setPosts(pre => [newPost, ...pre]);
		
	}
	return <div /*style={{width:'100px'}}  you can make style as this. */>
		<CreatePost onCreatePoat={addPost}/>
		{/* you should put {} because js inside html code */}
		{posts.map(post => <Post key={post.id} data={post}/>)}
		{/* <Counter />*/}
	</div>
}
export default App;