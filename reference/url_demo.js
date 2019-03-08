const url = require('url')
const myurl = new URL('http://www.mywebsite.com/hello.html?id=100&&status=active');
// const myUrl = url.parse('http://www.mywebsite.com/hello.html?id=100&&status=active');

console.log(myurl.href)
console.log(myurl.toString());

//host (root domain)
console.log(myurl.hostname);

//pathname
console.log(myurl.pathname);

//serialize query
console.log(myurl.search)

//params
console.log(myurl.searchParams);

//add params
myurl.searchParams.append('abc','123')
console.log(myurl.searchParams);

//loop through params
myurl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`));