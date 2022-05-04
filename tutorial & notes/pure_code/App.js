const animals = [{
	id: 1,
	name: "Dog",
}, {
	id: 2,
	name: "Cat"
}]

const App = () => {
	return React.createElement(
		"div", // name of tag
		{
			id: "firstComponent", // object
		},
		animals.map(animal => React.createElement("h1", {
			key: animal.id
		}, animal.name)) //Way 1 is better
		/* 	Way 2
			[React.createElement("h1", {}, animals[0].name), 
	        React.createElement("h1", {}, animals[1].name)]
	    */
	);
};

ReactDOM.render(App(), document.getElementById("root"));