//this document was added in the command line

var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Peter", "Sammy", "Tabby"],
	add: function(x,y){  //added a function and setting it as a value for the property add
		return x + y;
	}
};
obj.add(20,3); //this looks exactly like the console.log function
console.log(obj.add(10.5));
