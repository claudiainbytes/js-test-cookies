/**
* JS Test Cookies
* Methods to create, get and delete cookies in Javascript
* Created by: ClaudiaInBytes
* June 2017
**/

function createCookie( name, value ){

	value = escape(value);
	
	var today = new Date();
	
	today.setMonth(today.getMonth() + 1);
	
	document.cookie = name + "=" + value + ";expires=" + today.toUTCString() + ";";

}

function deleteCookie( name ){
	
	var today = new Date();
	
	today.setMonth(today.getMonth() - 1);
	
	document.cookie = name + "=x;expires=" + today.toUTCString() + ";";

}

function getCookie( name ){

	var cookies = document.cookie;

	var cookieArr = cookies.split("; ");

	//console.log(cookieArr);

	for(var i = 0; i < cookieArr.length; i++){

		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;

		if( parArr[0] === name ){

			return unescape(parArr[1]);

		}

	}

	return undefined;

}

document.write("<h1>Testing Cookies in JS</h1>");

document.write("<ol>");
document.write("<li>Create cookies</li>");
document.write("<li>Get Cookies</li>");
document.write("<li>Delete Cookies </li>");
document.write("<ol>");


createCookie("name","Claudia");
createCookie("country","Colombia");
createCookie("color","green");

console.log( getCookie("name") );
console.log( getCookie("country") );
console.log( getCookie("color") );

deleteCookie("name");
deleteCookie("country");
deleteCookie("color");
