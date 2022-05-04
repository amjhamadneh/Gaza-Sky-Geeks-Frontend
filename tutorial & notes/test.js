/*               Array and Object                */

// learn backtick 
/*var number = 12345;
var username = `Ahmad ${number} Wow!`;
console.log(username);
*/

// i can put any expression or (if statement but i dont prefare) but i cant put for loop 
/*let price = 10 ;
let vat = 0.5;
let total  = `Total ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);
*/


// destructuring assignment
	/* var values = [10,20,30,40];
	var [firstValue, SecondValue, ThirdValue] = values;
	var [firstValue, SecondValue, ThirdValue, FourthValue] = values; -> FourthValue is undefined
	*/

	/* var values = [10, 20, 30, 40, 50, 60, 70];
	var [firstValue, SecondValue, ThirdValue] = values;
	var [firstValue, SecondValue, ThirdValue, ...rest] = values; -> the rest contain the rest value 
	var [firstValue, SecondValue, ThirdValue, FourthValue] = values; -> FourthValue is undefined if the array contain 3 value
	*/

	// using objects
	/* var person = {
		name: "Ahmad",
		age: 1224
	}
	
	const {age, name} = person; you should put the same name as in object
	const {age, name:personName} = person;
	const {age, name = "Ahmad"} = person; defualt value of name if the name is not found in object
	const {age, ...rest} = person; -> value of rest will contain the name as object
	console.log(personName); -> output is Ahmad >>>> you can rename variable 
	console.log(person.name); -> output is Ahmad
	*/

/*
	funtion name(a = 1, b){ // not working becouse the default should be in the last or should put value default of b }
	funtion name(a , b = 1){ //working }
	funtion name(a ,...rest){ //working }
	var v = [1,2,3,4,5,6,7,1000];
	console(Math.max(...v)) --> output is 1000 this operator is destructuring 
	var name = funtion(){} //Anonymous function 
*/


/*
	//arrow function 
	const name = (a,b) => {
		return a * b;
	}	
	const name = (a,b) => a * b;
*/

/* let x = () => console.log("Ahmad");
 x();
*/


// you can use function as a value 
// map is array utility in JS
// map make an empty array and return different array  becouse maybe need the origin list

/*
var nums = [ 1,2,3,4,5,6];
var anotherNums = nums.map(x => x * x);
*/

/*
var list = [1,2,3,4,5];

var map = (fun, list) => {
	var res = []
	for (var i = 0; i < list.length; ++i){
		var newValue = fun(list[i]);
		res.push(newValue);
	}
	return res;
}
const res = map(x => x * x, list);
console.log(res);
*/

// not exists case satisfies or should use var datatype 
// eval function not used but exists in JS

/*
const data = [
	{id:1, name:"ahmad", price:100},
	{id:2, name:"hamad", price:80},
	{id:3, name:"jaber", price:50}
]

const func = (item) => {
	return {id:item.id, name:"mohmad"};
}
const res = data.filter(item => item.id >= 2 && item.name.includes('j'));
const res2 = data.map(item  => item.price - ((item.price * 20) / 100 ));
console.log(res2);

const res3 = data.map(item => 
	{
		return {
			price: 10; //will take it becouse it in the last value 
			...item,
			price: item.price - ((item.price * 20) / 100 ), // or price : itemp.price * ( 1 - 0.20),
			age:10102,
		}
	}
	// or 
	({
		price: 10; //will take it becouse it in the last value 
		...item,
		price: item.price - ((item.price * 20) / 100 ), // or price : itemp.price * ( 1 - 0.20),
		age:10102,
	})
)
console.log(res3);

*/

/*
// difference between some => check if exists or not and find return first item  exists and every return boolean if all item that satisfy condition 
const data = [
	{id:3, name:"jaber", price:20},
	{id:1, name:"ahmad", price:100},
	{id:2, name:"hamad", price:80},
	{id:3, name:"jaber", price:50}
]

const res = data.some(item => item.id == 4); // return false if not found any item  
const res2 = data.find(item => item.id == 3); // return undefined if not found any item
const res3 = data.every(item => item.id == 3);
console.log(res3);
*/
// any number, [], {}, function  is true but 0 and null is false


/*
	char * char => NaN.
	Math.sqrt(-1) => NaN
	1/0 => Infinity 
	0/0 => NaN
	Math.max() => -infinity //becouse inital value 
	Math.min() => infinity
	String(NaN) => 'NaN'
	Number({}) => NaN
	parseInt(0.0000005) => 5 becouse 0.0000005.toString() return '5e-7' read first number

	a = {1:'1'}
	b = {1:'1'}
	a == b or a === b is false because refer.. is different 
*/

// JS runs on single thread.

/*
//promises 
let data = fetch("api").then((data) => {
	//success
}).catch((exception) => {
	//faild
}).finally(()=>{
	//both will run
});
let data = fetch("api").then((data) => {
	//success
	data.json();
}).then((json) => { // json is from before then 
	//success
});
// fetch default method is GET
*/

// arrow function not effect on this 
// electron is tool run webapplication as desktop application 

//performance on web using flutter is bad 

















